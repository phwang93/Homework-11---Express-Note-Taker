// Setting up Express App and dependencies
const express = require('express');

const notes = express();

//Global variable to set path
const PORT = process.env.PORT || 3005;

// Set up notes app to handle data parsing 
notes.use(express.urlencoded({ extended: true }));
notes.use(express.json());

// Set up notes app to serve static files
notes.use(express.static('public'))

// Routes for the notes app
require("./routes/apiRoutes")(notes);
require("./routes/htmlRoutes")(notes);

// PORT listener for the notes app
notes.listen(PORT, function () {
    console.log('APP listening on PORT' + PORT);
});