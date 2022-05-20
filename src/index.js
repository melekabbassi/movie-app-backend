const express = require('express');
const mongoose = require('mongoose');
const movieController = require('../src/controlles/Movies');
const userController = require('../src/controlles/Users');

// npm run dev to run the server

mongoose.connect('mongodb+srv://Octopus:KvIRFsLQ3lemWdrP@movie-app-cluster.hhvvy.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
        .then(() => {
            const app = express();
            app.use(express.json());

            app.get("/movies", movieController.findMovies);
            app.post("/movies", movieController.createMovie);
            app.get("/movies/:id", movieController.findMovie);
            app.patch("/movies/:id", movieController.updateMovie);
            app.delete("/movies/:id", movieController.deleteMovie);

            app.post("/users/register", userController.register);
            app.post("/users/login", userController.login);
            app.get("/users/:id", userController.findUser);
            app.get("/users", userController.findUsers);
            app.patch("/users/:id", userController.updateUser);
            app.delete("/users/:id", userController.deleteUser);


            app.listen(3000, () => {
                console.log('Server is running on port 3000');
            });
        })