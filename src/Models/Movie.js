const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    poster: String,
    rating: Number
});

module.exports = mongoose.model('Movie', schema);