import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Positions", id: "positions" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">Kartheek</h1>
        <ul className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-gray-700 font-semibold hover:text-indigo-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
