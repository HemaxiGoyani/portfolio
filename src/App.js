import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Portfolio/Projects";
import Experiance from "./components/Experiance/Experiance";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
