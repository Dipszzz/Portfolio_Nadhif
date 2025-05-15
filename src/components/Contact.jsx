import React, { useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="contact"
      className="bg-[#1A3636] py-40 px-6 text-[#D6BD98] text-center scroll-mt-[80px]"
    >
      <h2
        className="text-4xl font-bold mb-4 border-b-4 inline-block border-[#D6BD98] pb-2"
        data-aos="fade-down"
      >
        Contact
      </h2>
      <p className="mb-10 text-lg" data-aos="fade-up">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        data-aos="fade-up"
      >
        {/* WhatsApp */}
        <a
          className="bg-[#40534C] p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
          data-aos="zoom-in"
        >
          <FaWhatsapp className="text-4xl text-[#D6BD98] mb-2" />
          <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
          <p>+62 821-2521-1091</p>
        </a>

        {/* Email */}
        <a
          className="bg-[#40534C] p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <FaEnvelope className="text-4xl text-[#D6BD98] mb-2" />
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <p>nadhifhisyam500@gmail.com</p>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/dypdipsdepdip"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#40534C] p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaInstagram className="text-4xl text-[#D6BD98] mb-2" />
          <h3 className="text-xl font-semibold mb-1">Instagram</h3>
          <p>@dypdipsdepdip</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
