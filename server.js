// import modules
const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

//require route
require('./route')(app);

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  