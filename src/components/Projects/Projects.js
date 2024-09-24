import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import antic from "../../Assets/Projects/antic.png";
import brunch from "../../Assets/Projects/brunch.png";
import dream_agency from "../../Assets/Projects/dream_agency.png";
import warsha from "../../Assets/Projects/warsha.png";
import scieverse from "../../Assets/Projects/scieverse.png";
import ecd from "../../Assets/Projects/ecd.png";

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
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}><h3><strong className="purple">DEV </strong></h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warsha}
              isBlog={false}
              title="WARSHA"
              description="Warsha is an online service application that connects clients with skilled artisans in various fields such as plumbing, electrical work, carpentry, and more. It enables clients to easily find and contact artisans for their needs, negotiate rates, and finalize service details. It's a convenient and reliable platform for obtaining high-quality artisanal services."
              ghLink="https://github.com/achraf799/warsha-dz.git"
              demoLink="https://warsha-dz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecd}
              isBlog={false}
              title="Excellence Centre Dentaire"
              description="website is a sleek, user-friendly platform designed for a modern dental clinic. It allows patients to browse dental services, schedule appointments, and access essential information about treatments and the clinic's dental experts. The website focuses on providing a seamless experience with a clean design, intuitive navigation, and responsive features to ensure accessibility across devices."
              ghLink="https://github.com/achraf799/excellencecentredentaire.git"
              demoLink="https://excellencecentredentaire.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dream_agency}
              isBlog={false}
              title="Dream Agency"
              description="The Dream Agency website is a sleek, modern platform showcasing the company's marketing, web development, and design services. It features a user-friendly layout, responsive design, and highlights the agency’s portfolio and expertise, creating an engaging experience for potential clients."
              ghLink="https://github.com/achraf799/dream_agencu.git"
              demoLink="https://enchanting-crepe-d981f4.netlify.app/#/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antic}
              isBlog={false}
              title="Antic"
              description="The Antic website is a stylish and visually appealing platform dedicated to interior decoration services. It showcases the company's expertise in transforming residential spaces with a blend of modern and classic design elements. The site features a portfolio of completed projects, detailed service descriptions, and design tips, creating an inviting experience for homeowners looking to enhance their interiors."
              ghLink="https://github.com/achraf799/project-vue.git"
              demoLink="https://spiffy-travesseiro-398c68.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scieverse}
              isBlog={false}
              title="Scieverse"
              description="The Scieverse project is a web application that extracts information from academic materials like books and articles. Built with React, users can upload images or PDFs, and the AI extracts key details such as the title, author, and description, generating a formatted PDF.

Utilizing Docker for deployment and a Grobid server for enhanced extraction, Scieverse offers a robust and efficient tool for researchers and students."
              ghLink="https://github.com/LenaSaidi/sciverse---flask-app-search-with-elasticsearch.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brunch}
              isBlog={false}
              title="Brunch"
              description="The Brunch website is a simple platform for booking tables at restaurants. Users can easily browse restaurants, view menus, and make reservations. With real-time availability and customer reviews, Brunch streamlines the dining experience, making it more convenient for food lovers."
              ghLink="https://github.com/achraf799/food-web.git"
              demoLink="https://astonishing-cascaron-d1a6ee.netlify.app/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
