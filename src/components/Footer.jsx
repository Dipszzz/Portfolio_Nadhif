import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#677D6A] text-[#D6BD98] text-center py-6">
      <h1 className="text-3xl font-bold text-[#D6BD98] mb-5 flex justify-center items-center">
        <CodeBracketIcon className="h-8 w-8 text-[#1A3636]" />
        <span>
          <span className="text-[#1A3636]">Dips</span>Portfolio
        </span>
      </h1>
      <p>&copy; {currentYear} DipsPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
