import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pyboy from "../../Assets/Projects/pyboy.png";
import learn_python from "../../Assets/Projects/learn_python.png";
import editor from "../../Assets/Projects/codeEditor.png";
import card from "../../Assets/Projects/card.png";
import python from "../../Assets/Projects/python.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Fullstack Shopping-Cart"
              description="MERN stack shopping cart, written in TypeScript."
              ghLink="https://github.com/seniordev90106/fullstack-shopping-cart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/seniordev90106/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/seniordev90106/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyboy}
              isBlog={false}
              title="Game Boy"
              description="Game Boy emulator written in Python."
              ghLink="https://github.com/seniordev90106/PyBoy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Blockchain Carbon"
              description="Official course repository for Python, JS, & React | Build a Blockchain & Cryptocurrency by David Katz."
              ghLink="https://github.com/seniordev90106/python-blockchain-tutorial"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learn_python}
              isBlog={false}
              title="Learning Python"
              description="This repository walks you through the Object Oriented Programming in python. Illustrates real world examples, working…"
              ghLink="https://github.com/seniordev90106/Learning-Object-Oriented-Python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
