const Movie = require("../Models/Movie");

exports.findMovies = async (req, res) => {
    const movies = await Movie.find();
    res.send({ data: movies });
};

exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.send({data: movie});
};

exports.findMovie = async (req, res) => {
    try {
        const movie = await Movie.findById( req.params.id );
        res.send({ data: movie });
    } catch {
        res.status(404).send("Movie not found");
    }
};

exports.updateMovie = async (req, res) => {
    const movie = await Movie.findById( req.params.id );

    try {
        const movie = await Movie.findById( req.params.id );
        Object.assign(movie, req.body);
        await movie.save();
        res.send({ data: movie });
    } catch {
        res.status(404).send("Movie not found");
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById( req.params.id );
        await movie.remove();
        res.send({ data: true });
    } catch {
        res.status(404).send("Movie not found");
    }
};