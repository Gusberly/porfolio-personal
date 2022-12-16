import React from "react";
import { FooterSection } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <FooterSection>
      <div>
        <h3>Gusberly Morillo</h3>
      </div>
      <div>
        <h3>Gracias por visitar mi sitio web</h3>
      </div>
    </FooterSection>
  );
}

export default Footer;
