"use.strict"

const express = require("express");

const app = express();

app.use(express.json());

const myRoutes = require("./routes/Newroutes.js")

app.use(myRoutes);

let names = ["Rebekah", "Ed", "Dan", "Shayan", "Gareth"];

const bodyParser = require("body-parser");

const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.use(logger);

const server = app.listen(3011);