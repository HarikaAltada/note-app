// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Notes from "./Notes";
import AddNote from "./AddNote";
import TabulatorTable from "./Tabulatortable";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/add-note">Add Note</Link>
            </li>
            <li>
              <Link to="/tabulator">Tabulator Table</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/notes" />} />
            <Route
              path="/notes"
              element={<Notes notes={notes} deleteNote={deleteNote} />}
            />
            <Route path="/add-note" element={<AddNote addNote={addNote} />} />
            <Route path="/tabulator" element={<TabulatorTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
