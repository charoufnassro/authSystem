const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    bio: String,
    image: String,
    hash: String,
    salt: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};