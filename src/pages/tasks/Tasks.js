import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import inviteIcon from "../../assets/icons/invite.png";
import starIcon from "../../assets/icons/star.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import checkBoxIcon from "../../assets/icons/checkbox.png";
import "./tasks.css";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const tasksData = [
  "Complete online Test in 30days",
  "Complete interviews",
  "Pitch to judges",
];

const featuresData = [
  {
    text: "Find your scores and progress",
    icon: starIcon,
  },
  {
    text: "Invite your driver friends to join",
    icon: inviteIcon,
  },
  {
    text: "Click on the WhatsApp button to get help",
    icon: whatsappIcon,
  },
];

function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogin(true));
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="tasks_container">
        <p className="tasks_title">Ghana Driver & Road Safety Awards 2022</p>

        <p className="what_next">What Next ?</p>

        <div className="mt-4 mb-4 tasks_video_container">
          <iframe
            src="https://www.youtube.com/embed/668nUCeBHyY"
            frameborder="0"
            // allow='autoplay; encrypted-media'
            allowfullscreen
            title="video"
            width="100%"
            height="100%"
          />
        </div>

        <p className="tasks">Guidelines</p>

        <div>
          <ul className="tasks_ul">
            {tasksData.map((item, idx) => (
              <li className="mb-4 tasks_list" key={idx}>
                <span>
                  <img src={checkBoxIcon} className="list_icons" alt="img" />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="features">Awardsboard Features</p>

        <div>
          <ul className="tasks_ul">
            {featuresData.map((item, idx) => (
              <li className="mb-4 tasks_list" key={idx}>
                <span>
                  <img src={item.icon} className="list_icons" alt="img" />
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <Button
          type="submit"
          className="tasks_submit_button mt-5"
          onClick={() => navigate("/")}
        >
          Start
        </Button>
      </div>

      <div className="tasks_container_web">
        <Row>
          <Col className="p-5">
            {" "}
            <p className="tasks_title">
              Ghana Driver & Road Safety Awards 2022
            </p>
            <p className="what_next">What Next ?</p>
            <div className="mt-4 mb-4 tasks_video_container">
              <iframe
                src="https://www.youtube.com/embed/668nUCeBHyY"
                frameborder="0"
                // allow='autoplay; encrypted-media'
                allowfullscreen
                title="video"
                width="100%"
                height="400px"
              />
            </div>
          </Col>
          <Col className="p-5">
            <p className="tasks">Guidelines</p>

            <div>
              <ul className="tasks_ul">
                {tasksData.map((item, idx) => (
                  <li className="mb-4 tasks_list" key={idx}>
                    <span>
                      <img
                        src={checkBoxIcon}
                        className="list_icons"
                        alt="img"
                      />
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="features">Awardsboard Features</p>

            <div>
              <ul className="tasks_ul">
                {featuresData.map((item, idx) => (
                  <li className="mb-4 tasks_list" key={idx}>
                    <span>
                      <img src={item.icon} className="list_icons" alt="img" />
                    </span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              type="submit"
              className="tasks_submit_button mt-5"
              onClick={() => navigate("/")}
            >
              Start
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tasks;
