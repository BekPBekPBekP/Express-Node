"use.strict"

const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, my name is Rebekah!");
});

let names = ["Rebekah", "Ed", "Dan", "Shayan", "Gareth"];

app.get('/getAll', (req, res) => {
    res.send(names);
});

app.get('/getAll/:id', (req, res) => {
    res.send(names[req.params.id]);
});

app.delete("/delete/:id", (req, res) => {
    console.log("ID: ", req.params.id);
    res.send(names.splice(req.params.id, 1));
});

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post('/create', (req, res) => {
const name = req.body.name;
names.push(name);
res.status(201).send(names[names.length -1]);
});


const server = app.listen(3011);