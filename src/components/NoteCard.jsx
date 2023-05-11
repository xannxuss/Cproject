import styles from "./NoteCard.module.css";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const NoteCard = ({ id, title, category, createdAt }) => {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  return (
    <a href={`/${id}`}>
      <div className={`card w-50 bg-base-100 shadow-xl mt-2 ${styles.card}`}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {category && <span className="badge mt-1">{category}</span>}
          <div className="flex flex-between">
            <p className="text-sm mt-2">
              Date: {createdAt.toLocaleDateString()}
            </p>
            <button onClick={handleClick}>🗑️</button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NoteCard;
