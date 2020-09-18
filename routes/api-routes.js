const db = require("../models");

module.exports = function(app) {
    //Get - Read Route
    app.get("/api/workouts", (req, res, next) => {
        db.Workout.find({})
            .then(workouts => {

                res.json(workouts.map(({day, exercises}) => ({
                    day,
                    exercises,
                    totalDuration: exercises.reduce((previousTotal, exercise) => previousTotal + exercise.duration, 0)
                })));
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });
// Post - Create Route
    app.post("/api/workouts", (req, res, next) => {
        db.Workout.create(req.body)
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });
// Put-Update route
    app.put("/api/workouts/:id", (req, res, next) => {
        db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new: true, runValidators: true, })
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });
// Read Specified Date Range
    app.get("/api/workouts/range", (req, res, next) => {
        let filterDate = new Date();
        filterDate = filterDate.setDate(filterDate.getDate() -7);
        db.Workout.find({day: {$gte: filterDate}})
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });
}