// Path Dependency
const path = require('path');

//Route Notes.js to html files
module.exports = (notes) => {
    
    notes.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    notes.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}