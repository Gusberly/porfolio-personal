import React from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import { ContainerHero } from "../src/Containers/heroContainer";
import AboutMe from "./components/AboutMe/AboutMe";
import Tech from "./components/Technologies/Tech";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ContainerHero>
      <Home />
      <AboutMe />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </ContainerHero>
  );
}

export default App;
