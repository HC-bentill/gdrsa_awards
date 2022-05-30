import React from 'react'
import { Container } from 'react-bootstrap'
import './howitworks.css'
import steps from '../../assets/img/works.png'

function HowItWorks() {
  return (
    <div style={{
        width:"100%",
        paddingBottom:"150px"
      }}>
          <Container>
            <p className='text-center howitworks mt-5'>How It Works</p>
            <div className='underline'></div>

            <div className='centerItems mt-5'>
                <img className='steps' src={steps} alt='works'/>
            </div>
            
          </Container>
    </div>
  )
}

export default HowItWorks