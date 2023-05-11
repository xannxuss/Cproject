import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Hero from "./pages/Hero";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Stats from "./pages/Stats";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";
import PrivateRoute from "./routes/PrivateRoute";
import Note from "./pages/Note";
import NoteLayout from "./pages/NoteLayout";
import PublicRoute from "./routes/PublicRoute";
import { AuthProvider } from "./context/auth";
import useFirestore from "./hooks/useFirestore";

const App = () => {
  const { docs: notes, isLoading } = useFirestore("notes");

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home notes={notes} />} />
          <Route path="guide" element={<Guide />} />
          <Route path="stats" element={<Stats />} />
          <Route path="new" element={<NewNote />} />
          <Route
            path=":id"
            element={<NoteLayout notes={notes} isLoading={isLoading} />}
          >
            <Route index element={<Note />} />
            <Route path="edit" element={<EditNote />} />
          </Route>
        </Route>
        <Route
          path="/hero"
          element={
            <PublicRoute>
              <Hero />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
