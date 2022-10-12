"use.strict"

const router = require("express").Router();

let names = ["Rebekah", "Ed", "Dan", "Shayan", "Gareth"];

router.get('/', (req, res) => {
    res.send("Hello, my name is Rebekah!");
});


router.get('/getAll', (req, res) => {
    res.send(names);
});

router.get('/getAll/:id', (req, res) => {
    res.send(names[req.params.id]);
});

router.delete("/delete/:id", (req, res) => {
    console.log("ID: ", req.params.id);
    res.send(names.splice(req.params.id, 1));
});


router.post('/create', (req, res) => {
const name = req.body.name;
names.push(name);
res.status(201).send(names[names.length -1]);
});

router.put('/replace/:id', (req, res) => {
    const name = req.query.name;
    const index = req.params.id;
    const oldName = names[index];
    names[req.params.id] = name;
    res.status(202).send(`${oldName} successfully replaced with ${name}`);
});

module.exports = router;