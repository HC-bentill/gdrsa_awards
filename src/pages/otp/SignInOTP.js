import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import OTPInput, { ResendOTP } from "otp-input-react";
import congrats from "../../assets/img/congrats.png";
import { FiYoutube } from "react-icons/fi";
import "./signinotp.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectRegistrationForm } from "../../features/appSlice";
import {
  registerUser,
  resendOTP,
  signin,
  signinResendOTP,
  signinverifyOTP,
  verifyOTP,
} from "../../api/register.service";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { storeItem } from "../../api/jwt.service";
import { selectUser, setLogin } from "../../features/userSlice";

function Otp() {
  const [OTP, setOTP] = useState("");
  const [show, setShow] = useState(false);
  const registrationFormData = useSelector(selectRegistrationForm);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const dataToSubmit = {
      phone: registrationFormData?.phone,
      code: OTP,
    };

    signinverifyOTP(dataToSubmit)
      .then((response) => {
        setIsSubmitting(false);
        if (response.data.ok) {
          signin(dataToSubmit)
            .then((res) => {
              storeItem(res.data.data.token, "token");
              swal({
                title: "Successful",
                text: "Logged in",
                icon: "success",
              });
              dispatch(setLogin(true));
            })
            .catch((err) => {
              swal({
                title: "Sorry, An Error Occured !",
                text: err.response.data.error.message,
                icon: "error",
              });
            });
        } else {
          swal({
            title: "Sorry, An Error Occured !",
            text: "Check Internet Connectivity and try again",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        swal({
          title: "Sorry, An Error Occured !",
          text: error.response.data.error.message,
          icon: "error",
        });
        console.log("error = ", error);
      });
  };

  const handleResendOtp = () => {
    setIsSubmitting(true);
    const dataToResend = {
      phone: registrationFormData?.phone,
      resend: true,
    };
    signinResendOTP(dataToResend)
      .then((response) => {
        setIsSubmitting(false);

        if (response.data.ok) {
          swal({
            title: "Success !",
            text: "OTP has been resent",
            icon: "success",
          });
        } else {
          swal({
            title: "Sorry, An Error Occured !",
            text: "Please, check internet connectivity and try again ",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        swal({
          title: "Sorry, An Error Occured !",
          text: error.response.data.error.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      {isSubmitting ? (
        <div data-testid="loader" className="loader_container">
          <div className="loader"></div>
        </div>
      ) : (
        <div style={{ overflow: "hidden" }}>
          <Row className="register_container">
            <Col sm={12} md={6}>
              <div className="gh_colors">
                <Row>
                  <Col className="red"></Col>
                  <Col className="yellow"></Col>
                  <Col className="green"></Col>
                </Row>
              </div>
              <div className="centerItems form_container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <p className="mb-2 text-center form_heading">OTP</p>
                  <p>Kindly enter 4 digit PIN sent to your phone</p>
                  <div className="centerItems">
                    <OTPInput
                      inputClassName="otp_input"
                      value={OTP}
                      onChange={setOTP}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      secure
                    />
                    <ResendOTP
                      className="resend_btn mt-4"
                      // maxTime={180}
                      onResendClick={() => handleResendOtp()}
                    />
                  </div>
                  <Form.Group className="centerItems">
                    <Button type="submit" className="submit_button">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col className="register_img" sm={12} md={6}></Col>
          </Row>
        </div>
      )}
      {/* ---Modal--- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="centerItems pt-5">
          <p className="modal_heading">
            Welcome to Ghana Driver <br></br> & Road Safety Awards 2022
          </p>

          <img src={congrats} className="congrats" alt="congrats" />

          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Congrats</p>
          <p>You are now registered!</p>
        </Modal.Body>
        <div
          className="centerItems
            mb-5"
        >
          <Button className="congrats_video" onClick={() => navigate("/tasks")}>
            Next
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Otp;
