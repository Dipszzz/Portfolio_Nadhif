import React, { useState } from "react";
import { Link } from "react-scroll";
import { CodeBracketIcon } from "@heroicons/react/24/solid"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass =
    "cursor-pointer text-[#D6BD98] hover:opacity-80 transition-colors duration-300";
  const activeClass = "text-[#D6BD98] hover:opacity-80 font-bold";

  return (
    <nav className="bg-[#677D6A] fixed top-0 left-0 w-full z-[999] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-3xl font-bold text-[#D6BD98] flex justify-center items-center"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#1A3636]" />
              Dipszzz
          </Link>

          <div className="hidden md:flex space-x-6 text-xl">
            {["home", "about", "projects", "tools", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={activeClass}
                  className={linkClass}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              )
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#D6BD98]">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A3636] px-4 py-2 space-y-2">
          {["home", "about", "projects", "tools", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass={activeClass}
              className={linkClass + " block"}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
