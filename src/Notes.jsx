// src/Notes.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

const renderBlock = (block) => {
  switch (block.type) {
    case "header":
      return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
    case "list":
      return `<ul>${block.data.items
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>`;
    case "paragraph":
      return `<p>${block.data.text}</p>`;
    case "embed":
      return `<div>${block.data.url}</div>`;
    default:
      return "";
  }
};

const Notes = ({ notes, deleteNote }) => {
  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>Notes</h1>
        <Link to="/add-note">Add Note</Link>
      </div>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index}>
            <div
              dangerouslySetInnerHTML={{
                __html: note.blocks.map(renderBlock).join(""),
              }}
            ></div>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
