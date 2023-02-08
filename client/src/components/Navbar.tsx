import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Profiles", path: "/profile" },
  { label: "Create Learning Space", path: "/create" },
];

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 p-3">
      <nav className=" flex justify-between items-center max-w-[90%] mx-auto">
        <Link to="/" className="font-bold text-xl text-white">
          M
        </Link>
        <div>
          <ul className="flex">
            {links.map((link) => (
              <li key={link.label} className="ml-3">
                <Link to={link.path} className="text-white hover:text-gray-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
