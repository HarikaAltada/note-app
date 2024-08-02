// src/AddNote.jsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import "./AddNote.css";

const AddNote = ({ addNote }) => {
  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        list: List,
        embed: Embed,
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedData = await editorRef.current.save();
      addNote(savedData);
      navigate("/notes");
    } catch (error) {
      console.error("Error saving editor content: ", error);
    }
  };

  return (
    <div className="add-note-container">
      <h1>Add Note</h1>
      <form className="add-note-form" onSubmit={handleSubmit}>
        <div id="editorjs" className="editorjs-container"></div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
