import React from "react";
import { imgtech } from "../../index";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

import CardTech from "./CardTech";
import { SectionTech, ImgTechContainer, TitleTech, Title } from "./StylesTech";

function Tech() {
  const [text, count] = useTypewriter({
    words: ["Tecnologías", "&&", "Herramientas"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <SectionTech>
      <TitleTech>
        <Title
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          {text}
          <Cursor cursorColor="#01DF3A" />
        </Title>
      </TitleTech>
      <ImgTechContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <CardTech imgtech={imgtech.html} name={"html"} />
        <CardTech imgtech={imgtech.css} name={"css"} />
        <CardTech imgtech={imgtech.js} name={"JavaScript"} />
        <CardTech imgtech={imgtech.react} name={"React"} />
        <CardTech imgtech={imgtech.redux} name={"redux"} />
        <CardTech imgtech={imgtech.node} name={"Node.js"} />
        <CardTech imgtech={imgtech.express} name={"Express"} />
        <CardTech imgtech={imgtech.postgre} name={"PostgreSQL"} />
        <CardTech imgtech={imgtech.sequelize} name={"Sequelize"} />
        <CardTech imgtech={imgtech.bootstrap} name={"Bootstrap"} />
        <CardTech imgtech={imgtech.vscode} name={"Visual"} />
        <CardTech imgtech={imgtech.postman} name={"Postman"} />
        <CardTech imgtech={imgtech.git} name={"Git"} />
        <CardTech imgtech={imgtech.figma} name={"Figma"} />
        <CardTech imgtech={imgtech.trello} name={"Trello"} />
      </ImgTechContainer>
    </SectionTech>
  );
}

export default Tech;
