import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const tools = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Vite",
    logo: "https://vitejs.dev/logo-with-shadow.png",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "npm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];

const Tools = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="tools"
      className="bg-[#40534C] py-20 text-[#D6BD98] px-6 scroll-mt-[80px]"
    >
      <div className="text-center mb-6" data-aos="fade-down">
        <h2 className="text-4xl font-bold inline-block border-b-4 border-[#D6BD98] pb-2">
          My<span className="text-[#1A3636]">Tools</span>
        </h2>
      </div>
      <p
        className="font-bold text-center mb-10 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        Here are the technologies and tools I work with to bring websites and
        applications to life.
      </p>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {tools.map((tool, index) => (
          <div
            key={tool.name}
            className="bg-[#1A3636] p-4 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
            data-aos="zoom-in"
            data-aos-delay={100 * ((index % 4) + 1)}
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-sm font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
