const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    givenName: String,
    lastName: String,
    urlPic: String,
    rol: {
        type: String,
        default: "user",
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
