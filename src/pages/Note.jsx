import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React from "react";
import { useRecoilValue } from "recoil";
import { notesState } from "../recoil/atoms";
import useFirestore from "../hooks/useFirestore";
import { useNote } from "./NoteLayout";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const Note = () => {
  const note = useNote();
  // const { docs: notes, isLoading } = useFirestore("notes");

  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
    //delete data from firestore
    try {
      await deleteDoc(doc(db, "notes", note.id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }

    navigate("/");
  };

  if (note == null) return <Navigate to="/" replace />;

  return (
    <div className="w-5/6 mx-auto">
      <div className="flex justify-between mt-2">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <div className="justify-end">
          <button className="btn btn-md btn-ghost" onClick={handleDelete}>
            Delete
          </button>
          <a href={`/${note.id}/edit`}>
            <button className="btn btn-md btn-ghost mx-2">Edit</button>
          </a>
        </div>
      </div>

      <span className="badge">{note.category}</span>
      <ReactMarkdown
        className="mt-10 max-w-full markdown"
        children={note.body}
      ></ReactMarkdown>
    </div>
  );
};

export default Note;
