const express = require("express");
const User = require("../models/User");

const router = express.Router();


router.post("/users", async (req, res) => {

    const {
        name,
        email,
        password,
        role,
        dob,
        age,
        gender,
        weight,
        membership,
        phone
    } = req.body;

    try {

        const user = new User({
            name: name,
            email: email,
            password: password,
            role: role,
            dob: dob,
            age: age,
            gender: gender,
            weight: weight,
            membership: membership,
            phone: phone
        });

        await user.save();

        res.json({
            message: "User created successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error creating user"
        });

    }

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


router.get("/users/:email/membership", async (req, res) => {

    const user = await User.findOne({
        email: req.params.email
    });

    if (user) {

        res.json({
            name: user.name,
            email: user.email,
            dob: user.dob,
            age: user.age,
            gender: user.gender,
            weight: user.weight,
            membership: user.membership,
            phone: user.phone
        });

    } else {

        res.status(404).json({
            message: "User not found"
        });

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


router.get("/members", async (req, res) => {

    const members = await User.find({
        role: "MEMBER"
    });

    res.json(members);

});


module.exports = router;