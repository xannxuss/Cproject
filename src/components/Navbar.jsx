import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/hero");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar justify-between w-5/6 mx-auto">
      <h1 className="font-bold normal-case text-3xl">
        MarkdownPro <span>📒</span>
      </h1>
      <button className="btn btn-md btn-ghost" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
