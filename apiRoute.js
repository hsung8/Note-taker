// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const fs = require('fs');
const path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {

    // Setup notes variable
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        // API GET Requests
        // Below code handles when users "visit" a page.
        // In each of the below cases when a user visits a link
        // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
        // ---------------------------------------------------------------------------

        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        // post route
        app.post("/api/notes", function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            //return console.log(`Added new note: ${newNote.title}`);
        });

        // get the note using id
        app.get("/api/notes/:id", function(req,res) {
            res.json(notes[req.params.id]);
        });

        // remove note by id
        app.remove("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            //console.log("Removed note with id "+req.params.id);
        });

        //updates after note add or note removal
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }
    });

}