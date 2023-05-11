import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = uuidV4();
    //upload to firebase
    try {
      await setDoc(doc(db, "notes", id), {
        id: id,
        title: title,
        body: body,
        category: category,
        createdAt: new Date(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
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
        <span className="font-bold text-3xl">{title}</span>
        <br />
        {category && <span className="badge mt-1">{category}</span>}
        <br />
        <ReactMarkdown
          className="mt-10 max-w-sm markdown"
          children={body}
        ></ReactMarkdown>
      </div>
    </div>
  );
};

export default NewNote;
