import { Button } from 'react-bootstrap';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { FiYoutube } from "react-icons/fi";
import './hero.css';
import heroImg from '../../assets/img/heroImg.png'
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';

function Hero() {

  const handleScroll = () => {
    if(window.innerWidth <= 830 ){
      window.scrollBy(0,1700)
    }else{
      window.scrollBy(0,900)
    }
  }
  
  const navigate = useNavigate();
  
  return (
    <>
    <Row className='hero'>
        <Col md={6} sm={12} className='text-center'>
            <h1 className='hero__text'>
                Ghana Driver & Road <br></br> Safety Awards 2022
            </h1>
             <div className='button_container'>
                <Button className='watch_video_button' onClick={()=>handleScroll()}>WATCH FULL VIDEO  <span><FiYoutube/></span></Button>
                <Button className='register_button' onClick={() => navigate('/register') }>Register</Button>
             </div>
        </Col>
        <Col md={6} sm={12}>
          <img className='heroImg' src={heroImg} alt='sda'/>
          <ReactConfetti 
            width={window.innerWidth}
            height={600}
          />
        </Col>
    </Row>
    </>
  )
}

export default Hero