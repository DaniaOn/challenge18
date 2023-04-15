const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connection('mongodb://127.0.0.1:27017/mygroceryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connectionconnection;