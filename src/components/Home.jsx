import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RotatingText from "../components/TextAnimations/RotatingText/RotatingText";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-[#1A3636] min-h-screen pt-32 flex flex-col md:flex-row items-center justify-between px-6 py-10 text-[#D6BD98] scroll-mt-24 overflow-x-hidden"
    >
      {/* Left Text Section */}
      <div
        className="md:w-1/2 flex justify-center items-center text-center md:text-left mb-8 md:mb-0"
        data-aos="fade-right"
      >
        <div className="max-w-full text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <RotatingText
              texts={["Nadhif", "Hisyam", "Ahmad"]}
              mainClassName="inline-block bg-[#D6BD98] text-[#1A3636] px-2 py-1 rounded-md"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
          <p className="text-3xl md:text-4xl mb-6">A Front-End Developer</p>
          <p className="text-xl mb-6 italic">
            Crafting clean, intuitive web experiences where design meets
            performance. Every detail enhances and elevates the user journey.
          </p>
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => handleScrollTo("projects")}
              className="bg-[#D6BD98] text-[#1A3636] py-2 px-6 rounded-md hover:bg-[#677D6A] hover:text-[#D6BD98] transition"
            >
              See My Work
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="border border-[#D6BD98] text-[#D6BD98] py-2 px-6 rounded-md hover:bg-[#677D6A] hover:text-[#D6BD98] transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
        <img
          src="https://i.imgur.com/XJzXHM1.jpeg"
          alt="Profile"
          className="rounded-xl w-[450px] h-[400px] object-cover shadow-lg border-4 border-[#677D6A]"
        />
      </div>
    </section>
  );
};

export default Home;
