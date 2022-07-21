import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { Avatar, Step, StepLabel, Stepper } from "@material-ui/core";
import "./levels.css";
import Vid1 from "../../assets/videos/vid1.MP4";
import Vid2 from "../../assets/videos/vid2.MP4";
import ReactPlayer from "react-player";
import LevelComponent from "../../components/levelComponents/LevelComponent";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getLessons } from "../../api/lessons.service";
import swal from "sweetalert";
import { getLevels } from "../../api/level.service";

function Levels() {
  const steps = ["", "", ""];
  const navigate = useNavigate();
  const [levels, setLevels] = useState([]);
  const videoProperties = [
    {
      id: 1,
      title: "English Version",
      src: Vid1,
    },
    {
      id: 2,
      title: "Twi Version",
      src: Vid2,
    },
  ];

  useEffect(() => {
    getLevels()
      .then((response) => {
        if (response?.data.ok) {
          setLevels([...response?.data.data.levels]);
        } else {
          console.log("response error =", response);
        }
      })
      .catch((error) => {
        console.log("errormsg = ", error);
        swal({
          title: "Sorry, An Error Occured !",
          text: error?.response.data.error.message,
          icon: "error",
        });
      });
  }, []);

  console.log("levels", levels);

  return (
    <>
      <div className="levels_container">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <header className="levels_header text-center">
              <div className="levels_header_container">
                <BsChevronLeft
                  onClick={() => navigate("/awardsboard")}
                  className="return_icon"
                />
                <p className="levels_top_text">
                  Ghana Driver & Road Safety Awards 2022
                </p>
              </div>

              <p className="levels_top_text">
                <strong>You have 3 levels to complete</strong>
              </p>
              <Stepper
                style={{ background: "#1a237e" }}
                activeStep={0}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel className="levels_step_label">{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </header>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Carousel className="levels_intro_video" interval={null}>
              {videoProperties.map((video) => (
                <Carousel.Item key={video.id}>
                  <ReactPlayer
                    className="player"
                    url={video.src}
                    pip={true}
                    width="100%"
                    height="60%"
                    controls={true}
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="level_components">
              {levels.map((item, idx) => (
                <LevelComponent
                  key={idx}
                  levelRoute={item?.id}
                  level={item?.title}
                  lesson={`Lesson ${0}/3`}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default React.memo(Levels);
