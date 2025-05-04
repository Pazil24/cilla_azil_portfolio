import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiRemix,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMetamask />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTruffle />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiHardhat />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRemix />
      </Col>
    </Row>
  );
}

export default Toolstack;
