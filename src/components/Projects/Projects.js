import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sarah from "../../Assets/Projects/sarahPortfolio.png";
import rencia from "../../Assets/Projects/RenciaTN.png";

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
              imgPath={sarah}
              isBlog={false}
              title="Sarah's Portfolio"
              description="This is a group portfolio project of a fictional photographer called Sarah. She is a portrait photographer that specializes in headshots for actors and models. She is based in London but provides mobile services and also available to travel. She currently needs a portfolio website to enable her showcase her work so as to reach more clients."
              ghLink="https://github.com/MutiatBash/Sarahs-Portfolio/tree/main"
              demoLink="https://sarahs-portfolio-project.vercel.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rencia}
              isBlog={false}
              title="Rencia Rent App"
              description="A rent app that I am designing to revolutionize the real estate industry in Ghana. The app will allow users to rent properties, pay rent, and request maintenance services. The app will also allow property owners to list their properties, receive rent payments, and manage their properties. There's no landlord interaction whatsover."
              ghLink="https://github.com/Pazil24/rencia-frontend"
              demoLink="https://youtu.be/YaI90XVbWPA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
