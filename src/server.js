const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../db.js").mongoURI;

const port = process.env.PORT || 5000 ;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB connected"))
    .catch(e => console.log(e));

app.listen(port, () => console.log(`Server up on port ${port}!`));




