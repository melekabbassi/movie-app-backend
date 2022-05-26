require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const movieController = require('./controlles/Movies');

// connect to the database
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get("/movies", movieController.findMovies);
app.post("/movies", movieController.createMovie);
app.get("/movies/:id", movieController.findMovie);
app.patch("/movies/:id", movieController.updateMovie);
app.delete("/movies/:id", movieController.deleteMovie);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

