import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './partners.css'
import partners from '../../assets/img/partners.png'
import {partnerImg} from './partnersImg'

function Partners() {
  return (
    <div style={{
        width:"100%",
        paddingBottom:"150px"
      }}>
        <Container>
            <p className='text-center howitworks mt-5'>Partners</p>
            <div className='underline'></div>

            <div className='d-flex mt-4 mb-5 partners_'>
                {partnerImg.map((item, idx) => (
                  <img className='partnersLogo' key={idx} src={item} alt="partner"/>
                ))}
            </div>

            <Container className='mobile_partners_bottom text-center'>
              <Row>
                <Col xs={12}>
                  <p><b>For sponsorship or more information</b></p>
                </Col>
                <Col xs={12}>
                  <p>Call +(233) 54 314 5471</p>
                  <p>freda@gdrsafoundation.org</p>
                </Col>
              </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Partners