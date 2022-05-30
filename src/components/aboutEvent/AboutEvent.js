import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import './aboutevent.css'

function AboutEvent() {
  return (
    <div style={{
        backgroundColor:'#dfdfdf',
        width:"100%",
        padding:"100px 0px",

    }}>
        <Container>
            <Row style={{
                backgroundColor:'#dfdfdf',
            }}>
                <Col xs={12} lg={6} md={6} className="left_text">
                    <p className='howitworks mt-5 p-2'>About the Awards</p>
                    <div className='under'></div>
                    <p className='p-4'>
                    The gdrsaFoundation and the National Road Safety Authority under the auspices of 
                    the Ministry of Transport are proud to present the <b>Ghana Driver and Road Safety Awards 2022</b>.
                    The Ghana Driver and Road Safety Awards is a commitment to reducing road accidents through training and rewards. 

 
                    <br></br> <br></br>Professional drivers from the <b>16 regions</b> of Ghana will get the opportunity to compete in <b>8 
                    categories</b> through quizzes and interviews, with finalists pitching a <b>solution to 1 Road Safety</b> issue 
                    they have in their community. <br></br>

                    </p>
                </Col>

                <Col xs={12} lg={6} md={6} className="right_text">
                <p>
                The best performing driver will be crowned the <b>Overall Best Driver</b> for the year. The winner will get 
                    a lifetime Master's Training in Singapore and up to Ghc50,000 financial support for his/her road safety project. 
                    All category winners with a special slot for the Best Female Driver will win cash prizes
                     and driver training opportunities.<br></br> <br></br>

                     Additionally, the Awards will commend organizations, groups, and individuals working to 
                     reduce road accidents in Ghana. How to be part Simple,  just click on the <a href='register'>Register</a> link below or 
                     above the video and register for free. 
                     This is your chance to be named Ghana's Best Driver and
                      an opportunity to save lives in your community.<br></br> <br></br>

                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutEvent