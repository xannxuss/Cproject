import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-indigo-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Markdown Pro <span>📒</span>
          </h1>
          <p className="py-6">A simple markdown editor</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
