import {
  Outlet,
  useParams,
  Navigate,
  useOutletContext,
} from "react-router-dom";

const NoteLayout = ({ notes, isLoading }) => {
  const { id } = useParams();

  if (isLoading) return;

  const note = notes.find((note) => note.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteLayout;
export const useNote = () => {
  return useOutletContext();
};
