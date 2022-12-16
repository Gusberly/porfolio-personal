import React from "react";
import photo from "../../Imagenes/1.jpeg";
import {
  Main,
  AboutGrid,
  Img,
  AboutMeTitle,
  Dowload,
  P,
  Photo,
  InfoContainer,
} from "./AboutMeStyles";
function AboutMe() {
  return (
    <Main
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <AboutGrid>
        <Photo>
          <Img src={photo} alt="" />
        </Photo>
        <InfoContainer>
          <AboutMeTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            Sobre Mi
          </AboutMeTitle>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            Mi nombre es Gusberly, soy Full Stack Developer Junior. Estoy en
            busqueda de mi primera oportunidad laboral para poder aplicar a
            proyectos reales todo lo aprendido, seguir aprendiendo nuevas
            tecnologías e incluso reforzar los conocimientos obtenidos. Busco
            formar parte de un equipo de trabajo flexible, moderno,
            comunicativo, unido, donde pueda desenvolverme sin miedo a
            equivocarme y tenga la oportunidad de crecer a nivel personal y
            profesional. Me considero una persona proactiva, organizada, de
            aprendizaje agíl, con facil adaptación en equipos nuevos o ya
            establecidos.
          </P>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          ></P>
          <Dowload
            target="blank"
            href="https://drive.google.com/file/d/1FAMO7atA55fdz6rA4GRp7OOh7i0Kcn2Z/view?usp=sharing"
          >
            Download Cv
          </Dowload>
        </InfoContainer>
      </AboutGrid>
    </Main>
  );
}

export default AboutMe;
