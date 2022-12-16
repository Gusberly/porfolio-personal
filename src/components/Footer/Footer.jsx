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
        <h3>
          <em>Gracias por visitar mi sitio web ❤️</em>
        </h3>
      </div>
    </FooterSection>
  );
}

export default Footer;
