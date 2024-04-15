import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi f.r.i.e.n.d.s, I am <span className="purple">Priscilla Azilafu </span>
            from <span className="purple"> Accra.</span>
            <br />
            I am currently seeking internships to gain more practical experience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the Digital World
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding to transform!"{" "}
          </p>
          <footer className="blockquote-footer">Cilla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
