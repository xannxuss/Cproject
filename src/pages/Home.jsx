import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import useFirestore from "../hooks/useFirestore";
import NoteCard from "../components/NoteCard";
import { useRecoilValue } from "recoil";
import { notesState } from "../recoil/atoms";

const Home = ({ notes }) => {
  //current state
  // const { docs: notes, isLoading } = useFirestore("notes");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const options = notes.map((note) => note.category);
  const uniqueOptions = [...new Set(options)];

  // const { docs: notes } = useFirestore("notes");
  // console.log(notes);
  // const notes = useRecoilValue(notesState);

  //filter notes
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (category === "" || note.category === category)
      );
    });
  }, [title, category, notes]);

  return (
    <div className="w-5/6 mx-auto">
      <div className="navbar justify-between mt-1">
        <a className="normal-case text-3xl mx-1 font-bold ">Home</a>
        <div className="flex-none">
          <Link to="/new">
            <button className="btn btn-md btn-ghost">New Note</button>
          </Link>
        </div>
      </div>

      <div className="flex justify-around mt-2">
        <div className="input group input-group-md">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search by title"
              className="input input-bordered input-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="form-control">
          <select
            className="select w-full max-w-xl select-ghost"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Pick category</option>
            {uniqueOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-2">
        {filteredNotes.map(
          (note) => (
            console.log(note),
            (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                category={note.category}
                createdAt={note.createdAt}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Home;
