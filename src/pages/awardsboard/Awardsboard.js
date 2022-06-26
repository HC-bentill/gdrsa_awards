import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, Modal, Row } from "react-bootstrap";
import "./awardsboard.css";
import { Avatar, Step, StepLabel, Stepper } from "@material-ui/core";
import quiz from "../../assets/img/onlineQuizzes.png";
import phone from "../../assets/img/phone.png";
import inperson from "../../assets/img/inperson.png";
import whatsapp from "../../assets/img/whatsapp_button.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { BASE_URL } from "../../constants/baseURL";
import { destroyItem, storeItem } from "../../api/jwt.service";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setLogin, setLogout } from "../../features/userSlice";
import { whoAmI } from "../../api/register.service";

function Awardsboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const steps = ["Register", "Online Quiz", "Interview", "Pitch", "Finale"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    swal({
      title: "Are you sure you want to logout ?",
      text: "Please Confirm",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      buttons: ["No", "Yes"],
    }).then((willLogout) => {
      if (willLogout) {
        dispatch(setLogout());
        destroyItem("token");
        window.location.replace("/");
        swal({
          title: "Logged Out!",
          text: "Success !",
          icon: "success",
          timer: 3000,
          button: false,
        });
      } else {
      }
    });
  };

  const style = {
    background: "whitesmoke",
    borderRadius: 3,
    border: 0,
    color: "Black",
    padding: "30px 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  const quizImages = [
    {
      locked: false,
      src: quiz,
      navigate: "/levels",
    },
    {
      locked: true,
      src: phone,
      navigate: "/",
    },
    {
      locked: true,
      src: inperson,
      navigate: "/",
    },
  ];

  useEffect(() => {
    storeItem(true, "dashboard visited");
    whoAmI()
      .then((response) => {
        if (response?.data.ok) {
          console.log("user details =", response?.data.data);
          dispatch(
            setLogin({
              ...response?.data.data,
            })
          );
        } else {
          console.log("response error =", response);
        }
      })
      .catch((error) => {
        console.log("errormsg = ", error);
        dispatch(setLogout());
        swal({
          title: "Sorry, An Error Occured !",
          text: error?.response.data.error.message,
          icon: "error",
        });
      });
  }, []);

  return (
    <>
      <Row className="awardsboard_container">
        <Col lg={12} md={12} sm={12} xs={12}>
          <p className="top_texts mt-4">
            Ghana Driver & Road Safety Awards 2022
          </p>
          <div>
            <p style={{ fontSize: "16px" }} className="top_texts">
              Awardsboard
            </p>

            <div className="awardsboard_header">
              <div>
                <div className="custom_flex">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      className="avatar_toggle"
                      id="dropdown-basic"
                    >
                      <AiOutlineUser
                        id="dropdown-split-basic"
                        className="avatar"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="avatar_menu">
                      <Dropdown.Item onClick={() => navigate("/guidelines")}>
                        Watch Guide Video
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleLogout()}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <h5 className="">{user?.firstName}</h5>
                </div>
                <p className="mt-3">
                  <span className="category_txt">{user?.category}</span> :{" "}
                  {user?.organisationName}
                </p>
              </div>
              <div className="avatar_container">
                <div>
                  <div className="points">
                    5 pts <span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="steps">
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="step_label">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="quiz_images_container">
            {quizImages.map((img, idx) => {
              const style = img.locked
                ? { filter: "grayscale(100%)" }
                : { filter: "grayscale(0%)" };
              return (
                <div className="centerItems">
                  <img
                    onClick={() => navigate(img.navigate)}
                    key={idx}
                    style={style}
                    className="quiz_images"
                    src={img.src}
                    alt="img"
                  />
                  {img.locked ? <MdOutlineLock className="lock_icon" /> : ""}
                </div>
              );
            })}
          </div>
          <Row>
            <Col xs={7}>
              <Button onClick={handleShow} className="dashboard_submit_button">
                <span>
                  <AiOutlineUserAdd />
                </span>{" "}
                Invite Friend
              </Button>
            </Col>
            <Col xs={5}>
              <div>
                <a href="https://api.whatsapp.com/send?phone=447939539989">
                  <img
                    src={whatsapp}
                    className="whatsappbtn"
                    alt="whatsappbtn"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*  modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <WhatsappShareButton
            quote={
              "You have been invited to the Ghana Driver Awards Competition; Click the link to join"
            }
            url={BASE_URL}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          <FacebookShareButton
            quote={
              "You have been invited to the Ghana Driver Awards Competition; Click the link to join"
            }
            url={BASE_URL}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            quote={
              "You have been invited to the Ghana Driver Awards Competition; Click the link to join"
            }
            url={BASE_URL}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            quote={
              "You have been invited to the Ghana Driver Awards Competition; Click the link to join"
            }
            url={BASE_URL}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
          <TelegramShareButton
            quote={
              "You have been invited to the Ghana Driver Awards Competition; Click the link to join"
            }
            url={BASE_URL}
          >
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
          <EmailShareButton
            quote={
              "You have been invited to the Ghana Driver Awards Competition; Click the link to join"
            }
            url={BASE_URL}
          >
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default React.memo(Awardsboard);
