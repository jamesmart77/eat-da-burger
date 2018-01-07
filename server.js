const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

// Create an instance of the express app.
const app = express();
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static("public"));

app.use("/", routes);

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});