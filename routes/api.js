const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        });
})

router.put("/api/workouts/:id", (req, res) => {
    const exercise = req.body
    Workout.findByIdAndUpdate(
        req.params.id, 
    {
        $push: {exercises: exercise}
    },{
        new: true, runValidators: true
    })
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        });
})



router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        });
})

router.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(req.body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router