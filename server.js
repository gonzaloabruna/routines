require('dotenv').config();
const check = require('check-types');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // because mpromise (mongoose's default promise library) is deprecated
const bodyParser = require('body-parser');
const httpStatusCodes = require('http-status-codes');

// Start the database
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {useMongoClient: true});

app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Import the models
const RoutineItemModel = require('./src/models/routine-item.model');
const TaskModel = require('./src/models/task.model');

// DEFINE THE API:
// API: get today tasks
app.get('/api/tasks/today', (req, res) => {
    // Find the tasks for today (if any):
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23,59,59,999);
    const todayTaskQuery = {
        taskDate: {
            $gte: start,
            $lte: end
        }
    };

    let existingTasks;
    TaskModel.find(todayTaskQuery).sort('order').then((todayTasks) => {
        existingTasks = todayTasks;

        // Check the routine items, to ensure that we have a task per each routine item
        const routineItemsQuery = {
            active: true
        };
        return RoutineItemModel.find(routineItemsQuery).sort('order');
    }).then((routineItems) => {
        const routineItemsWithTask = existingTasks.map((iTask) => {
            return iTask.routineItem.toString();
        });
        const tasksToCreate = routineItems.filter((iRoutineItem) => {
            return check.not.includes(routineItemsWithTask, iRoutineItem._id.toString());
        }).map((iRoutineItem) => {
            const iTask = {
                order: iRoutineItem.order,
                name: iRoutineItem.name,
                duration: iRoutineItem.duration,
                description: iRoutineItem.description,
                tags: iRoutineItem.tags,
                timeSpent: 0,
                percentageCompleted: 0,
                routineItem: iRoutineItem._id
            };
            return iTask;
        });
        return TaskModel.insertMany(tasksToCreate);
    }).then((newTasks) => {
        let allTasks = [];
        if(check.array(existingTasks) && check.nonEmptyArray(existingTasks)){
            allTasks = allTasks.concat(existingTasks);
        }
        if(check.array(newTasks) && check.nonEmptyArray(newTasks)){
            allTasks = allTasks.concat(newTasks);
        }
        res.json(allTasks);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: find tasks
app.post('/api/task/find', (req, res) => {
    TaskModel.find(req.body).sort('taskDate').then((tasks) => {
        res.json(tasks);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: update a task
app.put('/api/task/:id', (req, res) => {
    TaskModel.update({_id: req.params.id}, {$set: req.body}).sort('order').then((task) => {
        res.json(task);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: delete today tasks
app.delete('/api/tasks/today', (req, res) => {
    // Find the tasks for today (if any):
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23,59,59,999);
    const todayTaskQuery = {
        taskDate: {
            $gte: start,
            $lte: end
        }
    };

    TaskModel.remove(todayTaskQuery).then((routineItem) => {
        res.json(routineItem);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: create a routine-item
app.post('/api/routine-item', (req, res) => {
    RoutineItemModel.create(req.body).then((routineItem) => {
        res.json(routineItem);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: delete a routine-item
app.delete('/api/routine-item/:id', (req, res) => {
    RoutineItemModel.remove({_id: req.params.id}).then((routineItem) => {
        res.json(routineItem);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: find active routine-items
app.get('/api/active-routine-items', (req, res) => {
    const routineItemsQuery = {
        active: true
    };
    RoutineItemModel.find(routineItemsQuery).sort('order').then((routineItems) => {
        res.json(routineItems);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: find routine-items
app.post('/api/routine-item/find', (req, res) => {
    RoutineItemModel.find(req.body).sort('order').then((routineItems) => {
        res.json(routineItems);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// API: update a routine-item
app.put('/api/routine-item/:id', (req, res) => {
    RoutineItemModel.update({_id: req.params.id}, {$set: req.body}).sort('order').then((routineItems) => {
        res.json(routineItems);
    }).catch((error) => {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json(error);
    });
});

// Serve the built angular app:
app.get('*', (req, res) => {
    res.sendfile(`${__dirname}/dist/index.html`);
});

// Start the server:
app.listen(process.env.PORT || 3000, (() => {
    console.log('Express server listening');
}));

/*
// Add the simple security layer
const server = require('auth-static');
const config = {
    options: {},
    password: process.env.PASSWORD, // environment variable
    port: process.env.PORT,         // port for localhost only
    realm: 'Private',               // label for the auth form
    root: `./dist`,                 // root directory to serve
    username: process.env.USERNAME  // environment variable
};
server(config);
console.log('Security layer added');
*/
