// import modules
const express = require("express");
const fs = require("fs");
const path = require('path');

//require route
require('./apiRoutes')(app);
require('./htmlRoutes')(app);

const app = express();
const PORT = process.env.PORT || 3000;

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  