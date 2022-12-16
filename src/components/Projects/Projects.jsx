import React from "react";
import { GridProjects, H2, ProjectsSection } from "./StylesProjects";

import { projects } from "../../index.js";

import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Card from "./CardProjects";

function Projects() {
  const [text, count] = useTypewriter({
    words: ["Proyectos"],
    delaySpeed: 2000,
  });
  return (
    <ProjectsSection>
      <H2
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {text}
        <Cursor cursorColor="#00FF40" />
      </H2>
      <GridProjects
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Card
          repository={"https://github.com/Gusberly/PI_Pokemon"}
          url={"https://poke-app-liard.vercel.app/"}
          projects={projects.pokemon}
          description={"Pokemon App"}
        ></Card>
        <Card
          repository={"https://github.com/JaluGJ/ScriptMusic"}
          url={"https://script-music.vercel.app/"}
          projects={projects.scriptmusic}
          description={"ScriptMusic"}
        ></Card>
      </GridProjects>
    </ProjectsSection>
  );
}

export default Projects;
