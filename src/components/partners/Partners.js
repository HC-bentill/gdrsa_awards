import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./partners.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/carousel/Carousel";
import { partnerImg } from "./partnersImg";

function Partners() {
  return (
    <div
      style={{
        width: "100%",
        paddingBottom: "150px",
      }}
    >
      <p className="text-center howitworks mt-5">Partners</p>
      <div className="underline mb-5"></div>

      {/* <Carousel /> */}

      <Row>
        {partnerImg.map((item, idx) => (
          <Col xs={4} sm={4} md={2} lg={2} className="centerItems mb-5">
            <img
              key={idx}
              className="partnersLogo"
              src={item}
              alt="partner"
            />
          </Col>
        ))}
      </Row>

      <Container className="text-center partner_text">
        <Row>
          <Col xs={12}>
            <p>
              <b>For sponsorship or more information</b>
            </p>
          </Col>
          <Col xs={12}>
            <p>Call +(233) 54 314 5471</p>
            <p>freda@gdrsafoundation.org</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners;
