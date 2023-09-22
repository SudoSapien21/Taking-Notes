const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Read notes from the db.json file
router.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  res.json(notes);
});

// Save a new note to the db.json file
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
  res.json(newNote);
});


module.exports = router;