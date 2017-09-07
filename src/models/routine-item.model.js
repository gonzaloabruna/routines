const mongoose = require('mongoose');

const RoutineItemModel = mongoose.model('Routine-Item', {
    order: {type: Number, required: true},
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    description: String,
    tags: {type: [String]},
    active: {type: Boolean, 'default': true}
});

module.exports = RoutineItemModel;
