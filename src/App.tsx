import { Header } from "./components/Header";
import "./app.css";
import { CustomSection } from "./components/Section";

import React from "./assets/react.png";
import Nodejs from "./assets/nodejs.png";
import Js from "./assets/js.png";
import Native from "./assets/native.png";

export function App() {
  return (
    <div className="container">
      <Header />
      <CustomSection
        id="intro"
        backgroundColor="#F0F0F0"
        color="#555555"
        className="select select-into"
      >
        <div className="into-container">
          <img src={React} alt="" />
          <div className="into-content">
            <span>Getting Started</span>
            <p>
              React has been designed from the start for gradual adoption, and
              you can use as little or as much React as you need. Whether you
              want to get a taste of React, add some interactivity to a simple
              HTML page, or start a complex React-powered app, the links in this
              section will help you get started.
            </p>
          </div>
        </div>
      </CustomSection>
      <CustomSection
        id="info"
        backgroundColor="#222"
        color="#F1F1F1"
        className="select"
      >
        <div className="into-container">
          <img src={Nodejs} alt="" />
          <div className="into-content">
            <span>O qué Node.js?</span>
            <p>
              Node.js é um ambiente de execução JavaScript que permite executar
              aplicações desenvolvidas com a linguagem de forma autônoma, sem
              depender de um navegador. Com ele, é possível criar praticamente
              qualquer tipo de aplicações web, desde servidores para sites
              estáticos e dinâmicos, até APIs e sistemas baseados em
              microserviços.
            </p>
          </div>
        </div>
      </CustomSection>
      <CustomSection
        id="price"
        backgroundColor="#111"
        color="#F1F1F1"
        className="select"
      >
        <div className="into-container">
          <img src={Js} alt="" />
          <div className="into-content">
            <span>JavaScript</span>
            <p>
              JavaScript® (às vezes abreviado para JS) é uma linguagem leve,
              interpretada e baseada em objetos com funções de primeira classe,
              mais conhecida como a linguagem de script para páginas Web, mas
              usada também em vários outros ambientes sem browser, tais como
              node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma
              linguagem baseada em protótipos, multi-paradigma e dinâmica,
              suportando estilos de orientação a objetos, imperativos e
              declarativos (como por exemplo a programação funcional). Saiba
              mais sobre o JavaScript.
            </p>
          </div>
        </div>
      </CustomSection>
      <CustomSection
        id="footer"
        backgroundColor="#000"
        color="#F1F1F1"
        className="select"
      >
        <div className="into-container">
          <img src={Native} alt="" />
          <div className="into-content">
            <span>O que é o React Native ?</span>
            <p>
              Criado pelo Facebook em 2015 sobre a licença MIT, o React Native é
              um Framework para desenvolvimento de aplicativos móveis
              multiplataforma. Um Framework é um facilitador no desenvolvimento
              de diversas aplicações e, sem dúvida, sua utilização poupa tempo e
              custos para quem utiliza, pois de forma mais básica, é um conjunto
              de bibliotecas utilizadas para criar uma base, onde as aplicações
              são construídas, um otimizador de recursos.
            </p>
          </div>
        </div>
      </CustomSection>
    </div>
  );
}
