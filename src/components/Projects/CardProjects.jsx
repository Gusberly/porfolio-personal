import React from "react";
import { projects } from "../../index";
import { motion } from "framer-motion";
import styled from "styled-components";

function Card({ projects, description, url, repository }) {
  return (
    <CardProjects>
      <CardWrapper>
        <Enlace target="blank" href={url}>
          <ProjectImg src={projects} alt="" />
        </Enlace>
        <P>{description}</P>

        <ButtonWrapper>
          <EnlaceCards target="blank" href={repository}>
            Repositorio
          </EnlaceCards>
          <EnlaceCards target="blank" href={url}>
            Website
          </EnlaceCards>
        </ButtonWrapper>
      </CardWrapper>
    </CardProjects>
  );
}
const CardProjects = styled(motion.div)`
  width: 350px;
  border: solid 2px white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const EnlaceCards = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  :hover {
    background-color: #48404d;
    transition: 1s;
    color: white;
    cursor: pointer;
  }
`;
const Enlace = styled.a`
  filter: grayscale(1);
  transition: 1s;
  margin-bottom: 1rem;
  :hover {
    filter: none;
    transform: scale(110%);
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  align-items: center;
`;
export const P = styled.p`
  width: 85%;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;
export const CardWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const ProjectImg = styled.img`
  width: 300px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 10px;
`;

export default Card;
