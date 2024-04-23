const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    name: String,
    email: { type: String, unique: [true, 'email must be unique'] },
    password: String,
    createdAt: { type: Date, default: Date.now }
},);


const User = new mongoose.model('user', userShema);

module.exports = User;