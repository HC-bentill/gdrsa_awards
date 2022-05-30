import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaTiktok} from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
        <Container className='web_footer'>
            <Row>
                <Col>
                    <p className='footer_header'>
                        About Us
                    </p>
                    <ul style={{listStyleType: "none", color:"white"}}>
                        <li>For Partnersip, reach us on</li>
                        <li>+233 456 455 4455</li>
                        <li>team@gdrsafoundation.org</li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <Container className='mobile_footer'>
            <Row>
                <Col>
                    <ul className='footer_list'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Community</li>
                        <li>Partners</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy</li>
                    </ul>
                </Col>
            </Row>

            <Row >
              <p className='social_media_icons'>
                  <FaFacebookSquare style={{fontSize:"25px", marginTop:"14px", marginRight:"6px"}}/>
                  <FaTwitterSquare style={{fontSize:"25px", marginTop:"14px", marginRight:"6px"}}/>
                  <FaLinkedin style={{fontSize:"25px", marginTop:"14px", marginRight:"6px"}}/>
                  <FaTiktok style={{fontSize:"25px", marginTop:"14px", marginRight:"6px"}}/>
                 
                  <p className='copyright'>@Ghana Driver Awards</p>

                  <p className='copyright'>Copyright © 2022, gdrsa Foundation, All Rights Reserved</p>
              </p>
            </Row>
        </Container>
    </div>
  )
}

export default Footer