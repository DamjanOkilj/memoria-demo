import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import aboutPic from "../../images/profile.jpg";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12" className="text-center">
            <div className="profile-image-container">
              <img 
                src= {aboutPic}
                alt="Jochen Mertens" 
                className="profile-image"
              />
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="text-center">
            <h1 className="welcome-text">Welkom!</h1>
            <div className="about-content">
              <p>
                Mijn naam is Jochen Mertens en fotografie is voor mij meer dan alleen een beeld vastleggen het is een manier om verhalen te vertellen, 
                emoties te vangen en momenten te bewaren die anders misschien vergeten zouden worden.
              </p>
              <p>
                Mijn passie voor fotografie begon uit nieuwsgierigheid naar het spel tussen licht, kleur en emotie. 
                Wat ooit een hobby was, groeide uit tot een liefdevolle toewijding om de wereld door mijn lens te bekijken en te delen met anderen.
              </p>
              <p>
                Elke fotoshoot is voor mij een nieuwe kans om iets uniek te creëren en voor jou een herinnering te maken die je niet zal vergeten.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
