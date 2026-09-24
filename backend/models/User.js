const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    role: {
        type: String
    },

    diet: {
        type: String,
        default: ""
    },

    workout: {
        type: String,
        default: ""
    },

    dob: {
    type: String,
    default: ""
},

age: {
    type: Number,
    default: 0
},

gender: {
    type: String,
    default: ""
},

weight: {
    type: Number,
    default: 0
},

membership: {
    type: String,
    default: ""
},

phone: {
    type: String,
    default: ""
}

});

const User = mongoose.model("User", userSchema);

module.exports = User;