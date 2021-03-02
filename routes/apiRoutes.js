const router = require("express").Router();
const fs = require("fs");
// const db = require("../db/db.json");
let path = require('path');
let uuid = require('uuidv1');

router.get('/notes', (req, res) => {
    const notes = fs.readFileSync('./db/db.json', 'utf-8');
    res.json(JSON.parse(notes))
});

router.post('/notes', (req, res) => {
    let latestNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    req.body.id = uuid('');
    const newNote = req.body;
    console.log(newNote);
    latestNotes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(latestNotes, null, 2)); // null, 2 pretty prints the note in the db.json file
    res.json(newNote);
});

// router.delete('/notes/:id', (req, res) => {
//     const noteID = req.params.id;
//     let id = db.filter(entry => entry.id !== noteID);
//     fs.writeFileSync('./db/db.json', JSON.stringify(id));
//     res.json(db);
//   });

router.delete('/notes/:id', (req, res) => {
    const deleteNote = req.params.id;
    let latestNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    let filterNotes = latestNotes.filter(note => {
        return note.id !== deleteNote;
        });
    fs.writeFileSync('./db/db.json', JSON.stringify(filterNotes, null, 2));
    res.status(200).end();
})

// router.delete('/notes/:id', (req, res) => {
//     const deleteNote = req.params.id;
//     console.log('deleting', deleteNote);
//     let latestNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
//     console.log(typeof latestNotes);
//     let filterNotes = latestNotes.filter(note => {
//         // console.log(note.id);
//         return note.id !== deleteNote;
//     });
//     // console.log(filterNotes);
//     fs.writeFileSync('./db/db.json', JSON.stringify(filterNotes, null, 2));
//     res.status(200).end();
// });

module.exports = router;
