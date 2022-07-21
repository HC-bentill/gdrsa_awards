import React, { useState } from "react";
import "./signin.css";
import ReactConfetti from "react-confetti";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import heroImg from "../../assets/img/heroImg.png";
import Header from "../../components/header/Header";
import { useForm } from "react-hook-form";
import Otp from "../otp/Otp";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin, signinRequestOTP } from "../../api/register.service";
import swal from "sweetalert";
import { setRegistrationForm } from "../../features/appSlice";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (data) => {
    setIsSubmitting(true);
    const dataToSignin = {
      ...data,
    };

    signinRequestOTP(dataToSignin)
      .then((response) => {
        if (response.data.ok) {
          navigate("/otp-signin");
          swal({
            title: "Success!",
            text: "Enter OTP code",
            icon: "success",
          });
          dispatch(
            setRegistrationForm({
              ...data,
            })
          );
        } else {
          swal({
            title: "Error !",
            text: "Try again, Check internet connectivity",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log("error message = ", error?.message);
        setIsSubmitting(false);
        if (error?.response.data.error.id === "OtpExists") {
          swal({
            title: "OTP Code Expired !",
            text: "Please, click the resend button to receive a new one",
            icon: "error",
          });
          navigate("/otp-signin");
          dispatch(
            setRegistrationForm({
              ...data,
            })
          );
        } else if (error?.response.data.error.id === "UserExists") {
          swal({
            title: "Oops !",
            text: "You are a registered user",
            icon: "error",
          });
        } else if (error?.message === "Network Error") {
          swal({
            title: "Check Internet Connection !",
            icon: "warning",
          });
        } else if (error?.response.data.error.id === "UserNotFound") {
          swal({
            text: "User is not Registered, Please Register",
            icon: "warning",
          });
        }
      });
  };

  return (
    <>
      <div className="welcome_container">
        <Header
          title={"Ghana Driver & Safety Awards"}
          countdown={false}
          returnIcon={true}
        />

        <Row className="welcome">
          <Col md={6} sm={12} className="text-center pt-4">
            <h1 className="welcome__text">Welcome Back</h1>
            <p>
              Dont have an account yet ? <a href="/register">Register</a>
            </p>
            <p className="welcome__text_p">
              Enter your phone number to Sign In
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="centerItems">
                <Form.Group className="mb-5">
                  <Form.Control
                    {...register("phone", {
                      required: true,
                      min: 10,
                      maxLength: 10,
                    })}
                    className="welcome_form_inputs"
                    type="tel"
                    placeholder="eg. 024xxxxxxx "
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <span className="form_bottom_text text-danger ">
                      Phone number is required
                    </span>
                  )}
                  {errors.phone && errors.phone.type === "min" && (
                    <span className="form_bottom_text text-danger ">
                      Phone number is less then 10 characters
                    </span>
                  )}
                  {errors.phone && errors.phone.type === "maxLength" && (
                    <span className="form_bottom_text text-danger ">
                      Phone number exceeded 10 characters
                    </span>
                  )}
                </Form.Group>
              </div>
              <Form.Group className="centerItems">
                {isSubmitting ? (
                  <Button
                    className="submit_button_signin"
                    type="submit"
                    disabled
                  >
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
                  <Button className="submit_button_signin" type="submit">
                    Submit
                  </Button>
                )}
              </Form.Group>
            </form>
          </Col>
          <Col md={6} sm={12}>
            <img className="welcomeImg" src={heroImg} alt="sda" />
            <ReactConfetti width={window.innerWidth} height={350} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Signin;
