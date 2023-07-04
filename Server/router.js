const express = require("express");
const Workout = require("./models/workoutModel")

// Router Initialization
const router = express.Router();

// Get All Workouts Route
router.get("/", async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1});
    try {
        res.status(200).json(workout);
    }catch(error) {
        res.status(404).json({error: error.message});
    }
});

// Post Workout Route
router.post("/", async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }catch(error) {
        res.status(500).json({error: error.message})
    }
});

// Delete Workout Route
router.delete("/:id", async (req, res) => {
    const {id} = req.params
    try {
        workout = await Workout.findOneAndDelete({_id : id})
        res.status(200).json(workout)
    }catch(error) {
        res.status(404).json({error: error.message})
    }
})

module.exports = router;

