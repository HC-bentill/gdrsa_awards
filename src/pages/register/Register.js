import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { driverTypeOptions } from "./drivertype";
import { regions } from "./regions";
import { BsChevronLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { setRegistrationForm } from "../../features/appSlice";
import { requestOTP } from "../../api/register.service";
import { storeItem } from "../../api/jwt.service";

const Register = () => {
  const navigate = useNavigate();
  const [driverType, setDriverType] = useState("");
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDriverType = (data) => {
    setDriverType(data);
    handleClose();
  };

  console.log("driverType =", driverType);
  console.log("form errors =", errors);

  //when form is submitted
  const onSubmit = (data) => {
    setIsSubmitting(true);

    const dataToPost = {
      phone: data.phone,
    };

    requestOTP(dataToPost)
      .then((response) => {
        if (response.data.ok) {
          const requestToken = response.data.data.token;
          storeItem(requestToken, "token");
          dispatch(
            setRegistrationForm({
              ...data,
            })
          );
          //proceed to otp page if successful
          swal({
            title: "Form Submitted!",
            text: "Success !",
            icon: "success",
            timer: 3000,
            button: false,
          });

          navigate("/otp");
        } else {
          swal({
            title: "Your Form Could Not Be Submitted !",
            text: "This maybe due to poor internet connection, Please Try Again",
            icon: "error",
          });
          setIsSubmitting(false);

          console.log("requestotp failed", response);
        }
        console.log("requestotp", response);
      })
      .catch((error) => {
        if (error.response.data.error.id === "OtpExists") {
          swal({
            title: "OTP Code Expired !",
            text: "Please, click the resend button to receive a new one",
            icon: "error",
          });
          dispatch(
            setRegistrationForm({
              ...data,
            })
          );
          navigate("/otp");
        } else if (error.response.data.error.id === "UserExists") {
          swal({
            title: "Oops !",
            text: "You are a registered user",
            icon: "error",
          });
        } else {
        }
        console.log("error message = ", error);
        setIsSubmitting(false);
      });

    console.log(data);
  };

  return (
    <>
      <div>
        <Row className="register_container">
          <Col className="mobile_form_container" sm={12} md={6}>
            <div className="gh_colors">
              <Row>
                <Col className="red"></Col>
                <Col className="yellow"></Col>
                <Col className="green"></Col>
              </Row>
            </div>
            <div className="centerItems form_container">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <p className="form_heading">
                  Welcome to Ghana Driver & <br></br>
                  Road Safety Awards 2022
                </p>
                <Form.Group
                  className="mb-5"
                  controlId="exampleForm.ControlInput1"
                >
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        {...register("firstName", {
                          required: true,
                          message: "This field is required",
                        })}
                        className="form_inputs"
                        type="text"
                        placeholder="Kwaku"
                      />
                      {errors.firstName &&
                        errors.firstName.type === "required" && (
                          <span className="form_bottom_text text-danger ">
                            First name is required
                          </span>
                        )}
                    </Col>
                    <Col>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        {...register("lastName", { required: true })}
                        className="form_inputs"
                        type="text"
                        placeholder="Frimpong"
                      />
                      {errors.lastName &&
                        errors.lastName.type === "required" && (
                          <span className="form_bottom_text text-danger ">
                            Last name is required
                          </span>
                        )}
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Enter your phone number</Form.Label>
                  <Form.Control
                    {...register("phone", {
                      required: true,
                      min: 10,
                      maxLength: 10,
                    })}
                    className="form_inputs"
                    type="tel"
                    placeholder="eg. 0244123456"
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
                <Form.Group className="mb-5">
                  <Form.Label>Region</Form.Label>
                  <Form.Select
                    className="form_inputs mb-3"
                    aria-label="Default select example"
                    readOnly
                    {...register("region", { required: true })}
                  >
                    <option value={""}>Select Region</option>
                    {regions.map((item, idx) => (
                      <option key={idx} value={item?.value}>
                        {item?.key}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.region && errors.region.type === "required" && (
                    <span className="form_bottom_text text-danger ">
                      Region is required
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Driver Type</Form.Label>
                  <Form.Control
                    value={driverType}
                    {...register("category", { required: true })}
                    readOnly
                    onClick={handleShow}
                    className="form_inputs"
                    type="email"
                    placeholder="Tap to Select driver type"
                  />
                  {errors.category && errors.category.type === "required" && (
                    <span className="form_bottom_text text-danger ">
                      Driver Type required
                    </span>
                  )}
                </Form.Group>
                {driverType === "" ? (
                  ""
                ) : (
                  <Form.Group className="mb-5">
                    <Form.Label>Enter your Company/Union</Form.Label>
                    <Form.Control
                      {...register("organisationName", { required: true })}
                      className="form_inputs"
                      type="text"
                      placeholder=""
                    />
                    {errors.organisationName &&
                      errors.organisationName.type === "required" && (
                        <span className="form_bottom_text text-danger ">
                          Field is required
                        </span>
                      )}
                  </Form.Group>
                )}

                <Form.Group>
                  <input
                    {...register("termsAndConditionAgreement", {
                      required: true,
                    })}
                    type="checkbox"
                    className="checkbox"
                    style={{ marginRight: "13px" }}
                    value="true"
                  />
                  <label style={{ fontWeight: "500" }}>
                    I agree to all the Terms and Conditions
                  </label>
                  {errors.termsAndConditionAgreement &&
                    errors.termsAndConditionAgreement.type === "required" && (
                      <span className="form_bottom_text text-danger ">
                        Agree to Terms & Conditions before you can proceed
                      </span>
                    )}
                </Form.Group>
                <Form.Group className="">
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

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <BsChevronLeft onClick={() => handleClose()} />
        </Modal.Header>
        <Modal.Body>
          <Row>
            {driverTypeOptions.map((item, idx) => (
              <Col xs={6} sm={6} className="centerItems mb-5">
                <img
                  key={idx}
                  className="category_img"
                  onClick={() => handleDriverType(item.value)}
                  src={item.src}
                  alt={item.alt}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default React.memo(Register);
