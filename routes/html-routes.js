const path = require("path");

//Paths to files in public folder
module.exports = function (app) {
    app.get("/", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/index.html"));    
    });

    app.get("/exercise", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}