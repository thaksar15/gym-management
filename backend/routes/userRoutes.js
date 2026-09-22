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
module.exports = router;