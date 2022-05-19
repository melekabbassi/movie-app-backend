const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    rating: Number
});

module.exports = mongoose.model('Movie', schema);