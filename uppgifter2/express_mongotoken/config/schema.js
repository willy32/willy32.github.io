const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    id: String,
    password: String,
    stuff: {
        favoriteFood: String,
        favoriteMovie: String
    }
});

module.exports = new mongoose.model('user', userSchema, 'users');