const router = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");
const util = require('util');
let uuid = require('uuidv1');

router.get('/notes', (req, res) => {
    const notes = fs.readFileSync('./db/db.json', 'utf-8');
    res.json(JSON.parse(notes))
});

router.post('/notes', (req, res) => {
    req.body.id = uuid('');
    const newNote = req.body;
    console.log(newNote);
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(newNote);
});

module.exports = router;


// router.get('/notes', (req, res) => {
//     let notes = fs.readFileSync('./db/db.json', 'utf-8');
//     res.json(notes);
// });

// router.post('/notes', (req, res) => {
//     const newNote = req.body;
//     console.log(newNote)
//     db.push(newNote)
//     fs.writeFileSync('./db/db.json', JSON.stringify(db));
//     res.json(newNote);
//     res.send(`You added a new task!`);

// });