import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header({ countdown, signin, title }) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand  href="/">
            {!title ? <p className="navbar_brand">gdrsa<br></br>FOUNDATION</p> : ""}
            {title ? <p className="navbar_brand2">Ghana Driver & Safety Awards</p> : ""}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* {countdown ? 
                <Countdown className='countdown' date='2022-08-01' />
                 :
                 ""
                } */}
              {signin ? (
                <button
                  className="signin_header"
                  onClick={() => navigate("/alt-signin")}
                >
                  Sign in
                </button>
              ) : (
                ""
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="gh_colors">
        <Row>
          <Col className="red"></Col>
          <Col className="yellow"></Col>
          <Col className="green"></Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
