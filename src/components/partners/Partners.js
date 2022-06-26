import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import "./partners.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/carousel/Carousel"

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

        <Carousel />
        {/* <div className="d-flex mt-4 mb-5 ">
          {partnerImg.map((item, idx) => (
            <img
              className="partnersLogo desktop_partners_"
              key={idx}
              src={item}
              alt="partner"
            />
          ))}
        </div> */}

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
