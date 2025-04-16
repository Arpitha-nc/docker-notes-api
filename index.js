const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/Note");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/notes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/notes", async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.status(201).json(note);
});

app.listen(3000, () => console.log("Server running on port 3000"));
