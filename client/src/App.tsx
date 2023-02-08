import { Route, BrowserRouter, Routes } from "react-router-dom";

import CreateLearningSpace from "./pages/CreateLearningSpace";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateLearningSpace />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
