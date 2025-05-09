import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github } from "lucide-react";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#1A3636] py-20 text-[#D6BD98] px-6 scroll-mt-[80px]"
    >
      <h2
        className="text-4xl font-bold text-center mb-10"
        data-aos="fade-down"
      >
        <span className="inline-block border-b-4 border-[#D6BD98] pb-1 mt-2">
          <span className="text-[#677D6A]">My</span>
          <span className="ml-1">Project</span>
        </span>
      </h2>

      <p
        className="font-bold text-center mb-10 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        Here are some of the projects I've worked on. Each project showcases
        different skills and technologies.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {/* Project Card 1 */}
        <div
          className="bg-[#40534C] shadow-md rounded-2xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://i.imgur.com/UNr1K6V.png"
            alt="TDL Pict"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Basic
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Simple
              </span>
            </div>
            <h3 className="text-lg font-bold mb-1">To Do List</h3>
            <p className="text-sm text-[#D6BD98] mb-4">
              A simple and intuitive To-Do List application that allows users to
              add, edit, complete, and delete tasks efficiently. Built with a
              clean interface to help users stay organized and productive.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a
                href="https://dipszzz.github.io/NadhifTDL/"
                className="text-[#1DCD9F] flex items-center gap-1 hover:underline"
              >
                Live Demo <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/Dipszzz/NadhifTDL"
                className="text-[#D6BD98] flex items-center gap-1 hover:underline"
              >
                GitHub <Github size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          className="bg-[#40534C] shadow-md rounded-2xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://i.imgur.com/9Y6AXCD.png"
            alt="GG Pict"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Copy
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Responsive
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Basic
              </span>
            </div>
            <h3 className="text-lg font-bold mb-1">Copy Gudang Garam</h3>
            <p className="text-sm text-[#D6BD98] mb-4">
              A cloned version of the Gudang Garam company website, built for
              learning and design practice purposes. It replicates the layout,
              branding, and visual style to demonstrate front-end development
              skills.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a
                href="https://dipszzz.github.io/NadhifGD/"
                className="text-[#1DCD9F] flex items-center gap-1 hover:underline"
              >
                Live Demo <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/Dipszzz/NadhifGD"
                className="text-[#D6BD98] flex items-center gap-1 hover:underline"
              >
                GitHub <Github size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div
          className="bg-[#40534C] shadow-md rounded-2xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://i.imgur.com/Jny1aRu.png"
            alt="LandingPage Pict"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                LandingPage
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Responsive
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Static
              </span>
            </div>
            <h3 className="text-lg font-bold mb-1">Dipstech</h3>
            <p className="text-sm text-[#D6BD98] mb-4">
              A modern company profile website for Dipstech, showcasing
              services, team, and company information with a clean and
              responsive design aimed at enhancing online presence.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a
                href="https://dipszzz.github.io/NadhifLandingPageTech/#main"
                className="text-[#1DCD9F] flex items-center gap-1 hover:underline"
              >
                Live Demo <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/Dipszzz/NadhifLandingPageTech"
                className="text-[#D6BD98] flex items-center gap-1 hover:underline"
              >
                GitHub <Github size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 4 */}
        <div
          className="bg-[#40534C] shadow-md rounded-2xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src="https://i.imgur.com/CJtkyJN.png"
            alt="Dinamis Pict"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Copy
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Responsive
              </span>
              <span className="bg-[#1DCD9F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Static
              </span>
            </div>
            <h3 className="text-lg font-bold mb-1">Update DipsTech</h3>
            <p className="text-sm text-[#D6BD98] mb-4">
              A cloned version of the Dipstechnology website created for
              practice purposes, focusing on replicating its layout, animations,
              and responsive design to improve front-end development skills.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a
                href="https://website-pts-nadhif.vercel.app/"
                className="text-[#1DCD9F] flex items-center gap-1 hover:underline"
              >
                Live Demo <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/Dipszzz/WebsitePTSNadhif"
                className="text-[#D6BD98] flex items-center gap-1 hover:underline"
              >
                GitHub <Github size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
