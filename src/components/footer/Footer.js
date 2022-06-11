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
                 <a href="https://web.facebook.com/DriverandRoadsafetyAwards/"><FaFacebookSquare style={{fontSize:"25px", marginTop:"14px", marginRight:"20px"}}/></a> 
                  <a href="https://twitter.com/Driver_award?t=aCV9eSeybC-btlKaH0lJgw&s=08"><FaTwitterSquare style={{fontSize:"25px", marginTop:"14px", marginRight:"20px"}}/></a>
                  <a href="https://www.linkedin.com/company/ghana-driver-road-safety-awards-foundation/about/"><FaLinkedin style={{fontSize:"25px", marginTop:"14px", marginRight:"20px"}}/></a>
                  <a href="https://www.tiktok.com/@ghanadriverawards?_d=secCgYIASAHKAESPgo8%2FmobmuzHVk%2BNf30gM9Xfb1qgIqZJToM433gAgybNiyp7%2FYjsijGUgAHuMYOQzxAgEQWu%2FFgTdUfX5MczGgA%3D&_r=1&language=en&sec_uid=MS4wLjABAAAAB23Cz_jueH7rt04We1u7RuGL6ixMVOU0jj9-IeAzcixERaNGKIT_NUIZ-9CmTpHl&sec_user_id=MS4wLjABAAAAB23Cz_jueH7rt04We1u7RuGL6ixMVOU0jj9-IeAzcixERaNGKIT_NUIZ-9CmTpHl&share_app_id=1233&share_author_id=7092922433279296518&share_link_id=bcce600d-f31a-4d17-ae08-772707f03679&source=h5_m&timestamp=1653775725&u_code=e1f4mg35574e86&ugbiz_name=Account&user_id=7092922433279296518&utm_campaign=client_share&utm_medium=android&utm_source=whatsapp"><FaTiktok style={{fontSize:"25px", marginTop:"14px", marginRight:"20px"}}/></a>
                 
                  {/* <p className='copyright'>@Ghana Driver Awards</p> */}

                  <p className='copyright'>Copyright © 2022, gdrsa Foundation, All Rights Reserved</p>
              </p>
            </Row>
        </Container>
    </div>
  )
}

export default Footer