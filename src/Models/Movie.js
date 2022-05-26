const { links } = require('express/lib/response');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    poster: String,
    rating: Number,
    trailer: String,
    isFavorite: Boolean
});

module.exports = mongoose.model('Movie', schema);