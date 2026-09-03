const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Note = require("./models/Note"); // ✅ Import Note model

const app = express();
app.use(cors());
app.use(express.json());
app.use("/notes-files", express.static("notes"));
// ✅ Import notes routes
const notesRoute = require("./routes/notes");

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/passmateDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Hello from PassMate Backend 🚀");
});

// ✅ Use notes routes
app.use("/notes", notesRoute);

// Update a note's fileUrl by ID
app.put("/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { fileUrl: req.body.fileUrl },
      { new: true }, // returns the updated document
    );
    if (!updatedNote) {
      return res.status(404).send("Note not found");
    }
    res.json(updatedNote);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
