import { useNote } from "./NoteLayout";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const EditNote = () => {
  const note = useNote();

  const navigate = useNavigate();

  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [category, setCategory] = useState(note.category);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //update the note
    try {
      const newNoteRef = doc(db, "notes", note.id);
      await updateDoc(newNoteRef, {
        title: title,
        body: body,
        category: category,
        createdAt: new Date(),
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }

    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row w-5/6 mx-auto">
      <div className="grid grid-cols-3 gap-4 w-1/2">
        <div className="form-control col-start-1 col-span-3">
          <label className="input-group">
            <span>Title</span>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered input-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>

        <div className="form-control col-start-1 col-span-3">
          <label className="input-group">
            <span>Category</span>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered input-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>

        <textarea
          className="textarea textarea-bordered col-span-3"
          placeholder="Markdown here"
          rows={13}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <div className="col-start-3 col-span-1 flex justify-end">
          <Link to="/">
            <button className="mx-2 btn-ghost btn btn-sm">Cancel</button>
          </Link>
          <button className="btn btn-ghost btn-sm" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>

      <div className=" w-1/2">
        <span className="font-bold text-4xl">{title}</span>
        <br />
        {category && <span className="badge mt-1">{category}</span>}
        <br />
        <ReactMarkdown
          className="mt-10 max-w-2xl markdown"
          children={body}
        ></ReactMarkdown>
      </div>
    </div>
  );
};

export default EditNote;
