const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const app = express();



//MongoDB Atlas Code Snippet with user & pw






//Settings previous to MongoDB Atlas

app.use(logger("dev"));

//Use Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Static Assets (used with Heroku)
app.use(express.static("public"));

//api routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}!`);
});