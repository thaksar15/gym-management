const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/users", async (req, res) => {

    const { name, email, password, role } = req.body;

    const user = new User({
        name: name,
        email: email,
        password: password,
        role: role
    });

    await user.save();

    res.send("User created successfully");
});


router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({
        email: email,
        password: password
    });

    if (user) {

        res.json({
            message: "Login successful",
            role: user.role,
            name: user.name
        });

    } else {

        res.status(401).send("Invalid email or password");

    }

});


router.put("/users/:email/diet", async (req, res) => {

    const { diet } = req.body;

    const user = await User.findOneAndUpdate(
        { email: req.params.email },
        { diet: diet },
        { new: true }
    );

    if (user) {
        res.json({
            message: "Diet assigned successfully"
        });
    } else {
        res.status(404).send("User not found");
    }

});

router.get("/users/:email/diet", async (req, res) => {

    const user = await User.findOne({
        email: req.params.email
    });

    if (user) {
        res.json({
            diet: user.diet
        });
    } else {
        res.status(404).send("User not found");
    }

});

router.put("/users/:email/workout", async (req, res) => {

    const { workout } = req.body;

    const user = await User.findOneAndUpdate(
        { email: req.params.email },
        { workout: workout },
        { new: true }
    );

    if (user) {
        res.json({
            message: "Workout assigned successfully"
        });
    } else {
        res.status(404).send("User not found");
    }

});

router.get("/users/:email/workout", async (req, res) => {

    const user = await User.findOne({
        email: req.params.email
    });

    if (user) {
        res.json({
            workout: user.workout
        });
    } else {
        res.status(404).send("User not found");
    }

});

module.exports = router;