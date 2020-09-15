const mongoose = require("mongoose");
//mongoose db key values
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
        enum: ["cardio", "resistance"],
        required: true,
    },
    weight: {
        type: Number,
        min: 1,
    },
    sets: {
        type: Number,
        min: 1,
    },
    reps: {
        type: Number,
        min: 1,
    },
    sets: {
        type: Number,
        min: 1,
    },
    duration: {
        type: Number,
        min: 1,
    },
    distanced: {
        type: Number,
        min: 1,
    },
},
{
    strict: true
});

//Day - Unix Timestamp return for current time
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [exerciseSchema],
},
{
    strict: true
});
// model connection
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;