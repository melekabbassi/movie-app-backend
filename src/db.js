const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
    };

    try {
        mongoose.connect("mongodb+srv://Octopus:KvIRFsLQ3lemWdrP@movie-app-cluster.hhvvy.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log(error);
        console.log('Failed to connect to MongoDB');
    }
};