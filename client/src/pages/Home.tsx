import { useNavigate } from "react-router-dom";

import { Navbar } from "../components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <div className="flex items-center space-y-6 justify-center flex-col max-w-2xl mx-auto">
          <h2 className="font-bold text-5xl">
            Education at your <span className="text-blue-500">doorstep</span>
          </h2>
          <p className="text-center text-2xl">
            We have perfected online-based learning so that you don't have to
            suffer looking for one. Create a personal space to get started.
          </p>

          <div className="flex items-center space-x-4">
            <button
              className="rounded-md bg-blue-500 text-base focus-within: outline-none focus:outline text-white py-2 px-5"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="border rounded-md border-blue-500 focus:outline-none focus-within:outline-none py-2 px-5"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
