import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-blue-900 text-white font-pixel scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
