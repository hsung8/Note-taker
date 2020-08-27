// import modules
const express = require("express");
const fs = require("fs");
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;



//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


//require route
require('./route')(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  