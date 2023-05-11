import { atom, selector } from "recoil";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect } from "react";

//fetch the notes data from firebase
// const getNotes = async () => {
//   const notes = [];
//   const querySnapshot = await getDocs(collection(db, "notes"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     notes.push(doc.data());
//   });
//   return notes;
// };

// const notes = getNotes();

//create a state for the notes
// const notes = [
//   {
//     id: "1",
//     title: "Hello world1",
//     body: "Hello world",
//     category: "react",
//   },
//   { id: "2", title: "Hello world2", body: "## Hello world", category: "react" },
//   { id: "3", title: "Hello world3", body: "Hello world", category: "react" },
//   { id: "4", title: "Hello world4", body: "Hello world", category: "react" },
// ];

const notesState = atom({
  key: "notesState",
  default: [],
});

export { notesState };
