"use.strict"

const express = require("express");

const app = express();

const err = new Error("This is a flagged message");


app.get('/error', (req, res, next) => {
next(err);

});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send("Oops");
});


app.listen(4400);