import React, { useState } from 'react'
import './signin.css'
import ReactConfetti from 'react-confetti';
import { Button, Col, Form, Row } from 'react-bootstrap';
import heroImg from '../../assets/img/heroImg.png'
import Header from '../../components/header/Header';
import { useForm } from 'react-hook-form';
import Otp from '../otp/Otp';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../../features/userSlice';

function  Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const dataToSignin = {
            ...data,
            otp: OTP
        }
        dispatch(setLogin({
            ...dataToSignin
        }))
        navigate("/awardsboard")
    }


  return (
      <div className='welcome_container'>
      <Header countdown={false}/>

    <Row className='welcome'>
        <Col md={6} sm={12} className='text-center'>
            <h1 className='welcome__text'>
                Welcome Back
            </h1>
            <p className='welcome__text_p'>Enter your 4 digit code to Sign In</p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='centerItems'>
                    <Form.Group className="mb-5">
                        <Form.Control {...register("phone", {required: true, min: 10, maxLength: 10})} className='welcome_form_inputs' type="tel" placeholder="Enter your phone number " />
                    </Form.Group>
                </div>

                <div className='centerItems'>
                    <p style={{color:"gray", fontSize:"12px"}}>Enter 4 digit code.</p>
                    <div className='centerItems'>
                        <OTPInput
                        inputClassName='otp_input'
                        value={OTP}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={4} 
                        otpType="number"
                        disabled={false}
                        secure
                        />
                        {/* <ResendOTP className="resend_btn mt-4" maxTime={180} onResendClick={() => alert(OTP)} />   */}
                    </div>
                </div>

                <Form.Group className='centerItems'>
                    <Button type="submit" className='welcome_submit_button mt-5'>Submit</Button>
                </Form.Group>

            </form>

        </Col>
        <Col md={6} sm={12}>
          <img className='welcomeImg' src={heroImg} alt='sda'/>
          <ReactConfetti 
            width={window.innerWidth}
            height={350}
          />
        </Col>
    </Row>

    </div>
  )
}

export default Signin