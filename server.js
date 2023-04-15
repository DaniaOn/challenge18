const express = require('express');
// Run npm install mongodb and require mongodb
const mongodb = require('mongodb');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes); for the API

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});