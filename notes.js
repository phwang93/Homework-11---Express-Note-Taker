// Setting up Express App and dependencies
const express = require('express');

const app = express();

//Global variable to set path
const PORT = process.env.PORT || 3005;

// Set up APP to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up APP to serve static files
app.use(express.static('public'))

// Routes for the app
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// PORT listener for the app
app.listen(PORT, function () {
    console.log('APP listening on PORT' + PORT);
});