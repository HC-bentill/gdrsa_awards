import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import OTPInput, { ResendOTP } from "otp-input-react";
import congrats from "../../assets/img/congrats.png";
import { FiYoutube } from "react-icons/fi";
import "./otp.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectRegistrationForm } from "../../features/appSlice";
import { registerUser, resendOTP, verifyOTP } from "../../api/register.service";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { storeItem } from "../../api/jwt.service";
import { setLogin } from "../../features/userSlice";

function Otp() {
  const [OTP, setOTP] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registrationFormData = useSelector(selectRegistrationForm);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const dataToPost = {
      phone: registrationFormData?.phone,
      code: OTP,
    };
    console.log("REGISTER", dataToPost);

    const dataToRegister = {
      firstName: registrationFormData?.firstName,
      lastName: registrationFormData?.lastName,
      phone: registrationFormData?.phone,
      category: registrationFormData?.category,
      region: registrationFormData?.region,
      organisationName: registrationFormData?.organisationName,
      termsAndConditionAgreement:
        registrationFormData?.termsAndConditionAgreement === "true" ? true : "",
    };

    console.log("dataToRegister =", dataToRegister);

    verifyOTP(dataToPost)
      .then((response) => {
        setIsSubmitting(false);
        if (response.data.ok) {
          registerUser(dataToRegister)
            .then((res) => {
              storeItem(res.data.data.token, "token");
              handleShow();
              // dispatch(setLogin(true));
              console.log(res);
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
            title: "An Error Occured !",
            text: response.data.error.message,
            icon: "error",
          });
        }
        console.log("verifyotp", response);
      })
      .catch((error) => {
        setIsSubmitting(false);
        swal({
          title: "Sorry, An Error Occured !",
          text: error.response.data.error.message,
          icon: "error",
        });
        console.log(error);
      });
  };

  const handleResendOtp = () => {
    setIsSubmitting(true);
    const dataToResend = {
      phone: registrationFormData?.phone,
      resend: true,
    };
    resendOTP(dataToResend)
      .then((response) => {
        setIsSubmitting(false);
        if (response.data.ok) {
          storeItem(response.data.data.token, "token");
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
                  {isSubmitting ? (
                    <Button className="submit_button" type="submit" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />{" "}
                      Please Wait...
                    </Button>
                  ) : (
                    <Button className="submit_button" type="submit">
                      Submit
                    </Button>
                  )}
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col className="register_img" sm={12} md={6}></Col>
        </Row>
      </div>

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
