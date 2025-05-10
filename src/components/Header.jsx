import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-9 px-4 md:px-8">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#b9fd50] px-4 py-2 rounded-md">
            Home
          </Link>
          <Link to="/services" className="hover:text-[#b9fd50] px-4 py-2 rounded-md">
            Services
          </Link>
          <Link to="/projects" className="hover:text-[#b9fd50] px-4 py-2 rounded-md">
            Projects
          </Link>
          <Link to="/team" className="hover:text-[#b9fd50] px-4 py-2 rounded-md">
            Our Team
          </Link>
          <Link to="/contact" className="hover:text-[#b9fd50] px-4 py-2 rounded-md">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/917264063562"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#b9fd50] text-black py-2 px-6 rounded-3xl">
              Let's Talk
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black border-t border-[#1e1e1e]">
          <Link to="/" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#b9fd50]">
            Home
          </Link>
          <Link to="/services" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#b9fd50]">
            Services
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#b9fd50]">
            Projects
          </Link>
          <Link to="/team" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#b9fd50]">
            Our Team
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="block px-4 py-2 hover:text-[#b9fd50]">
            Contact
          </Link>
          <a
            href="https://wa.me/917264063562"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full bg-[#b9fd50] text-black py-2 rounded-3xl mt-2">
              Let's Talk
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
