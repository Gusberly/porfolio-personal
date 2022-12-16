import { motion } from "framer-motion";
import styled from "styled-components";

export const Logo = styled.img`
  width: 400px;
  background: transparent;
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  overflow: hidden;
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0px, -15px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
`;
export const Bg = styled.div`
  position: absolute;
  top: 50%;
  @media (min-width: 768px) {
    top: 50%;
  }
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-image: url("https://img.freepik.com/vector-gratis/numeros-que-caen-digitales-codigo-binario-estilo-matrix-fondo-azul_1017-37387.jpg?w=740&t=st=1670705473~exp=1670706073~hmac=e6754445f4d080264490a7648a7d502ecaab7f1c704f054cb05292ee6f134926");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100%;
`;
export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;
  position: relative;
  --s: 100px;
  --c1: #2b1123;
  --c2: #000;
  --c3: var(--amarillo);

  --_s: calc(2 * var(--s)) calc(2 * var(--s));
  background: calc(0.7 * var(--s)),
    conic-gradient(from 90deg at 20% 20%, var(--c2) 50%, var(--c1) 0) 0 0 /
      var(--s) var(--s);

  animation: m 10s infinite;

  @keyframes m {
    0% {
      background-position: calc(0.9 * var(--s)) calc(0.9 * var(--s)),
        calc(-0.1 * var(--s)) calc(-0.1 * var(--s)),
        calc(-0.3 * var(--s)) calc(-0.3 * var(--s)), 0 0;
    }
    25% {
      background-position: calc(1.9 * var(--s)) calc(0.9 * var(--s)),
        calc(-1.1 * var(--s)) calc(-0.1 * var(--s)),
        calc(-1.3 * var(--s)) calc(-0.3 * var(--s)), 0 0;
    }
    50% {
      background-position: calc(1.9 * var(--s)) calc(-0.1 * var(--s)),
        calc(-1.1 * var(--s)) calc(0.9 * var(--s)),
        calc(-1.3 * var(--s)) calc(0.7 * var(--s)), 0 0;
    }
    75% {
      background-position: calc(2.9 * var(--s)) calc(-0.1 * var(--s)),
        calc(-2.1 * var(--s)) calc(0.9 * var(--s)),
        calc(-2.3 * var(--s)) calc(0.7 * var(--s)), 0 0;
    }

    100% {
      background-position: calc(2.9 * var(--s)) calc(-1.1 * var(--s)),
        calc(-2.1 * var(--s)) calc(1.9 * var(--s)),
        calc(-2.3 * var(--s)) calc(1.7 * var(--s)), 0 0;
    }
  }
`;
export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;
export const A = styled.a`
  text-decoration: none;
  color: white;
  margin-bottom: 2rem;
  &:hover {
    transform: scale(110%);
  }
`;
