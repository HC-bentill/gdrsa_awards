import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './prizes.css';
import airplane from '../../assets/icons/airplane.png'
import idea from '../../assets/icons/idea.png'
import money from '../../assets/icons/money.png'
import { BsCashStack } from "react-icons/bs";

function Prizes() {
  return (
    <div style={{
      width:"100%",
      paddingBottom:"150px"
    }}>
        <Container>
            <p className='text-center prizes'>Prizes to be won</p>
            <div className='underline'></div>

            <Row className='mt-5'>
                <Col className='centerItems text-center' md={4} xs={12}>
                    <img className='prizes_img mb-4' src={airplane} alt=''/>
                    <p className='prizes_text'>A Master DriverTraining in Singapore for Overall Best Driver</p>
                </Col>
                <Col className='centerItems text-center' md={4} xs={12}>
                   <img className='prizes_img mb-4' src={idea} alt=''/>
                   <p className='prizes_text'>Ghc50,000 support for the winner's road safety project</p>
                </Col>
                <Col className='centerItems text-center' md={4} xs={12}>
                   <BsCashStack className='prizes_img' style={{marginBottom:"37px", fontSize:"58px"}}/>
                   <p className='prizes_text'>Ghc 100, 000 in cash and prizes for 10 category winners.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Prizes