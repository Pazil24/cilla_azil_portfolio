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
            I am a DevSecOps Engineer graduate from Cybersafe Foundation, specialized in cybersecurity and secure software development.
            <br />
            I have completed comprehensive training in DevSecOps, including Secure SDLC, container security, blockchain security, and secure coding practices.
            <br />
            <br />
            I'm actively involved in the Web3 space, participating in programs like Women in Ethereum Protocol and Dev3pack.
            I'm currently contributing to OnlyDust and Celo, and I participated in the ETH Accra hackathon 2024.
            <br />
            <br />
            My expertise spans across:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> DevSecOps and Cybersecurity
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain Development (DeFi, ZK Proofs, Polkadot, Ethereum)
            </li>
            <li className="about-activity">
              <ImPointRight /> Secure Software Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Open Source Contributions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building secure and innovative solutions for the future!"{" "}
          </p>
          <footer className="blockquote-footer">Cilla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
