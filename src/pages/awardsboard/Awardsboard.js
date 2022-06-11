import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "./awardsboard.css";
import { Avatar, Step, StepLabel, Stepper } from "@material-ui/core";
import quiz from "../../assets/img/onlineQuizzes.png";
import phone from "../../assets/img/phone.png";
import inperson from "../../assets/img/inperson.png";
import whatsapp from "../../assets/img/whatsapp_button.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdOutlineLock } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareCount,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { BASE_URL } from "../../constants/baseURL";
import { ShareSocial } from "react-share-social";

function Awardsboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const steps = ["Register", "Online Quiz", "Interview", "Pitch", "Finale"];
  const navigate = useNavigate();

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

  return (
    <>
      <Row className="awardsboard_container">
        <Col lg={12} md={12} sm={12} xs={12}>
          <p className="top_texts mt-4">
            Ghana Driver & Road Safety Awards 2022
          </p>
          <div>
            <p style={{ fontSize: "16px" }} className="top_texts">
              <strong>Welcome to your Awardsboard</strong>
            </p>

            <div className="awardsboard_header">
              <div>
                <h1 className="">
                  <strong>Kwaku</strong>
                </h1>
                <p className="mt-4">
                  <span className="category_txt">Ride Hailing</span> : Uber
                </p>
              </div>
              <div className="avatar_container">
                <div>
                  <Avatar
                    className="avatar"
                    style={{ background: "orange", padding: "25px" }}
                  >
                    K
                  </Avatar>
                  <div className="points">
                    12 pts <span>⭐</span>
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
          <ShareSocial
            style={style}
            url={BASE_URL}
            socialTypes={["facebook", "twitter", "reddit", "linkedin", "email"]}
            title={'Invite A Friend'}
          />
      </Modal>
    </>
  );
}

export default Awardsboard;
