const express = require("express");
const Note = require("../models/Note");
const router = express.Router();

// Add new note
router.post("/", async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get notes by year, semester, subject
router.get("/", async (req, res) => {
  const { year, semester, subject } = req.query;
  try {
    const notes = await Note.find({ year, semester, subject });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Delete a note
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
