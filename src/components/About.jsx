import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    // Inisialisasi AOS dan setel once: false agar animasi diulang setiap elemen muncul
    AOS.init({
      duration: 1000,
      once: false, // Membuat animasi tetap terjadi saat scroll ke bawah dan ke atas
    });

    // Fungsi untuk mereset AOS pada scroll
    const resetAOS = () => {
      AOS.refresh(); // Menyegarkan AOS agar animasi dapat muncul lagi
    };

    // Menambahkan event listener pada scroll
    window.addEventListener("scroll", resetAOS);

    return () => {
      // Menghapus event listener saat komponen di-unmount
      window.removeEventListener("scroll", resetAOS);
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-[#40534C] py-20 text-center text-[#D6BD98] px-6 scroll-mt-[80px]"
    >
      <h2
        className="text-4xl font-bold mb-10 inline-block border-b-4 border-[#D6BD98] pb-2"
        data-aos="fade-down"
      >
        About<span className="text-[#1A3636]">Me</span>
      </h2>

      {/* Foto dan Bio */}
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-up"
      >
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src="https://i.imgur.com/PCLkR7K.jpeg"
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-[#D6BD98] shadow-lg"
          />
        </div>
        <div className="text-left max-w-xl" data-aos="fade-left">
          <p className="text-lg mb-4">
            Hi! I'm Nadhif — a frontend developer who loves crafting delightful
            digital experiences. My journey in tech started from curiosity and
            quickly turned into a passion.
          </p>
          <p className="text-lg mb-4">
            I focus on building responsive, clean, and intuitive websites using
            tools like React, Tailwind CSS, and a sprinkle of animation for that
            smooth user feel. For me, it's not just about code — it's about
            making the web a friendlier place to be.
          </p>
          <p className="text-lg">
            When I'm not coding, you'll probably find me exploring design ideas,
            trying out new tools, or just vibing to chill music while learning
            something new.
          </p>
        </div>
      </div>

      {/* Education & Work Experience */}
      <div
        className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
        data-aos="fade-up"
      >
        {/* Education */}
        <div data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-[#D6BD98] inline-block">
            Education
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>SMK Letris Indonesia 2</strong> — <br />Software Engineering
              (2023–Present).
            </li>
          </ul>
        </div>

        {/* Work Experience */}
        <div data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-[#D6BD98] inline-block">
            <span className="text-[#1A3636]">Work</span> Experience
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Front-End Developer Intern</strong> — <br />PT Samawa Consultant
              Indonesia (2025)
              <br />
              Developed website interfaces using React and Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
