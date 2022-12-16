import React from "react";
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  SocialCard,
  GridSocial,
  ContactTitle,
  SectionContact,
} from "./StylesContact";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
function Contact() {
  const [text, count] = useTypewriter({
    words: ["Contacto"],
    delaySpeed: 2000,
  });
  return (
    <SectionContact>
      <ContactTitle>
        {text}
        <Cursor />
      </ContactTitle>
      <GridSocial id="contact">
        <a target="blank" href="https://www.linkedin.com/in/gusberly-morillo/">
          <SocialCard CardBg="Linkedin">
            <FaLinkedin color="white" size={50} />
          </SocialCard>
        </a>
        <a target="blank" href="mailto:gusberlymorillo@gmail.com">
          <SocialCard CardBg="Gmail">
            <SiGmail color="white" size={50} />
          </SocialCard>
        </a>
        <a target="blank" href="https://github.com/Gusberly">
          <SocialCard CardBg="Github">
            <FaGithub color="white" size={50} />
          </SocialCard>
        </a>

        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=541125644261&text=Hola%2C+vi+tu+porfolio+y+me+gustar%C3%ADa+coordinar+una+entrevista+%C2%BFPodemos+agendar%3F&type=phone_number&app_absent=0"
        >
          <SocialCard CardBg="WhatsApp">
            <FaWhatsappSquare color="white" size={50} />
          </SocialCard>
        </a>
      </GridSocial>
    </SectionContact>
  );
}

export default Contact;
