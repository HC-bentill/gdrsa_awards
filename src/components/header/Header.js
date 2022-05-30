import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import './header.css';

function Header() {
  return (
    <>
    <Navbar className='navbar'>
        <Container>
            <Navbar.Brand className='navbar_brand'href="#home">gdrsa<br></br>FOUNDATION</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Countdown className='countdown' date='2022-08-01' />
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <div className='gh_colors'>
        <Row>
            <Col className='red'>
            </Col>
            <Col className='yellow'>
            </Col>
            <Col className='green'>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Header