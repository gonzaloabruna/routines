const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const TaskModel = mongoose.model('Task', {
    order: {type: Number, required: true},
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    description: String,
    tags: [{
        tagName: String,
        tagColor: String
    }],
    taskDate: {type: Date, 'default': Date.now, required: true},
    timeSpent: {type: Number, 'default': 0, required: true},
    percentageCompleted: {type: Number, 'default': 0, required: true},
    routineItem: {type: Schema.Types.ObjectId, required: true}
});

module.exports = TaskModel;
