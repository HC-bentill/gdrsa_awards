import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import OTPInput, { ResendOTP } from "otp-input-react";
import congrats from '../../assets/img/congrats.png'
import { FiYoutube } from "react-icons/fi";
import './otp.css'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectRegistrationForm } from '../../features/appSlice';
import { verifyOTP } from '../../api/register.service';
import swal from 'sweetalert';

function Otp() {

    const [OTP, setOTP] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const registrationFormData = useSelector(selectRegistrationForm)

    const onSubmit = (data) => {
        const dataToPost = {
            phone: registrationFormData.phone,
            code: OTP,
            otpType:"REGISTER"
        }
        console.log("REGISTER", dataToPost)


        verifyOTP(dataToPost)
        .then(response => {
            if (response.data.ok){
                handleShow();
            }else{
                swal({
                    title: "Oops !",
                    text: response.data.error.message,
                    icon: "error",
                });
            }
            console.log("verifyotp", response)
        })
        .catch(error => {
            swal({
                title: "Oops !",
                text: "Invalid OTP",
                icon: "error",
              });
            console.log(error)
        })
    }

  return (
      <>
    <div style={{overflow: "hidden"}} >
        <Row  className='register_container'>
            <Col sm={12} md={6}>
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
            <div className='centerItems form_container'>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <p className='mb-4 text-center form_heading'>
                OTP
                </p>
                <p>Kindly enter 4 digit PIN sent to your phone</p>
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
                <Form.Group className='centerItems'>
                    <Button type="submit" className='submit_button'>Submit</Button>
                </Form.Group>
            </Form>
            </div>
            </Col>
            <Col className='register_img' sm={12} md={6}>  
            </Col>
        </Row>
    </div> 

    {/* ---Modal--- */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Body className='centerItems pt-5'>
            <p className='modal_heading'>
            Welcome to Ghana Driver <br></br> & Road Safety Awards 2022
            </p>

            <img src={congrats} className="congrats" alt="congrats"/>

            <p style={{fontSize:"25px", fontWeight:"bold"}}>Congrats</p>
            <p>You are now registered!</p>
        </Modal.Body>
            <div className='centerItems
            mb-5'>
                <Button className='congrats_video'>Next</Button>
            </div>
      </Modal>
      </>
     )
}

export default Otp