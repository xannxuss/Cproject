import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <Outlet />
      <Bottom />
    </div>
  );
};

export default HomeLayout;
