const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res, next) => {
        db.Workout.find({})
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });

    app.post("/api/workouts", (req, res, next) => {
        db.workout.create(body)
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });

    app.put("/api/workouts/:id", (req, res, next) => {
        db.workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new: true, runValidators: true, })
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });

    app.get("/api/workouts/range", (req, res, next) => {
        let chooseDate = new Date();
        chooseDate = chooseDate.setDate(chooseDate.getDate() -7);
        db.Workout.find({day: {$gte: chooseDate}})
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    });
}