import { useState } from "react";
import "./App.css";

function App() {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState("");

  const getNotes = async () => {
    if (!year || !semester || !subject) {
      setMessage("Please select Year, Semester and Subject.");
      setNotes([]);
      return;
    }

    try {
      setMessage("Searching for your notes...");

      const response = await fetch(
        `http://localhost:5000/notes?year=${year}&semester=${semester}&subject=${encodeURIComponent(subject)}`,
      );

      const data = await response.json();

      setNotes(data);

      if (data.length === 0) {
        setMessage("No notes found for this selection.");
      } else {
        setMessage(`Found ${data.length} note(s)!`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server.");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚 PassMate</h1>
        <p>Your Senior's Got Your Back!</p>
      </header>

      <main className="container">
        <h2>Find Your Study Materials</h2>

        <p className="subtitle">
          Select your year, semester and subject to get your notes.
        </p>

        <div className="form">
          <label>Year</label>

          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

          <label>Semester</label>

          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>

          <label>Subject</label>

          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Database Management Systems">
              Database Management Systems
            </option>
            <option value="Operating Systems">Operating Systems</option>
            <option value="Computer Networks">Computer Networks</option>
            <option value="Compiler">Compiler</option>
          </select>

          <button onClick={getNotes}>🔍 Get Notes</button>
        </div>

        {/* Results */}

        {message && <p className="message">{message}</p>}

        {notes.length > 0 && (
          <div className="results">
            <h2>📄 Available Notes</h2>

            {notes.map((note) => (
              <div className="note-card" key={note._id}>
                <h3>{note.subject}</h3>

                <p>
                  Year: {note.year} | Semester: {note.semester}
                </p>

                <a
                  href={note.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👁 View / Download
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>Made with ❤️ for students by students</p>
      </footer>
    </div>
  );
}

export default App;
