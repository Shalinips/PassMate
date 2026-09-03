const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    semester: { type: Number, required: true },
    subject: { type: String, required: true },
    fileUrl: { type: String, required: true } // URL or path to PDF
});

module.exports = mongoose.model("Note", noteSchema);
