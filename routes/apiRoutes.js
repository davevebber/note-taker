// const { notes } = require('../Develop/db/db.json')
const router = require("express").Router();

let db = require("../db/db.json");
const fs = require("fs");
const path = require("path");

router.get('/notes', (req, res) => {
    const notes = fs.readFileSync('../db/db.json', 'utf-8');
    res.json(JSON.parse(db));
});

router.post('/notes', (req, res) => {
    const newTask = req.body;
    db.push(newTask);
    fs.writeFileSync('../db/db.json', JSON.stringify(db));
    res.json(newTask);
});

module.exports = router;