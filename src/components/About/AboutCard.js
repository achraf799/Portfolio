import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">BOUDIAF MOHAMMED ACHRAF </span>
            from <span className="purple"> ALGERIA</span> based in <span className="purple"> FRANCE</span>
            <br />
            I am currently a computer science student et <span className="purple"> Orleans University </span>
            <br />
            with a strong passion for <span className="purple">full-stack development, UX/UI design,</span> and a solid foundation in<span className="purple"> databases.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /><b> Organizing and participating in tech events</b> with clubs like GDG Algiers and ESI Scientific Club.
            </li>
            <li className="about-activity">
              <ImPointRight /> <b> Filming, photography, and video production</b> as part of my work on multimedia projects and personal creative pursuits.
            </li>
            <li className="about-activity">
              <ImPointRight /> <b> Remixing music</b>, exploring creative sound designs and producing music in my free time.
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every idea that sparks in your mind is there for a purpose—it's a glimpse of something you have the power to bring to life."{" "}
          </p>
          <footer className="blockquote-footer">ACHPROD</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
