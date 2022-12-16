import React from "react";
import perfil from "../../Imagenes/programa.png";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ImGithub } from "react-icons/im";
import { Container, Centered, Logo, Bg, SocialIcons, A } from "./StylesHome";
import NavBar from "../NavBar/NavBar";

export function Home() {
  const [text] = useTypewriter({
    words: [
      "Hola, Soy Gusberly Morillo!",
      "Full Stack Web Dev Junior",
      "Bienvenidx a mi Portfolio",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <Container id="home">
      <Bg></Bg>
      <Centered>
        <Logo src={perfil} alt="perfil" />
        <div>
          <h1>
            <span>{text}</span>
            <Cursor cursorColor="#946e26" />
          </h1>
        </div>

        <SocialIcons
          initial={{ x: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <A target="blank" href="https://www.linkedin.com/in/gusberly-morillo">
            <FaLinkedin size={50} style={{ color: "#fff" }} />
          </A>
          <A target="blank" href="https://github.com/Gusberly">
            <ImGithub size={45} style={{ color: "#fff" }} />
          </A>
          <A
            target="blank"
            href="https://api.whatsapp.com/send/?phone=541125644261&text=Hola%2C+vi+tu+porfolio+y+me+gustar%C3%ADa+coordinar+una+entrevista+%C2%BFPodemos+agendar%3F&type=phone_number&app_absent=0"
          >
            <FaWhatsappSquare size={50} style={{ color: "#fff" }} />
          </A>
        </SocialIcons>
      </Centered>
      <NavBar />
    </Container>
  );
}
