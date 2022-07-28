import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import "./levelcomponent.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import checkBoxIcon from "../../assets/icons/checkbox.png";
import { useNavigate } from "react-router-dom";
import { storeItem } from "../../api/jwt.service";

function LevelCompoment({ level, lesson, levelRoute }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/lessons/${levelRoute}`);
  };
  return (
    <>
      <Card
        className="card_"
        onClick={() => {
          handleNavigation();
        }}
      >
        <div className="card_body">
          <div className="card_thumbnail">
            <AiOutlinePlayCircle className="play_icon" />
          </div>
          <div className="card_content">
            <p className="card_content_level">{level}</p>
            <p className="card_content_lesson">{lesson} </p>
            <ProgressBar className="card_content_progress" now={0} />
          </div>
          <div className="card_details">
            <p className="card_details_time">00:00/15:00</p>
            <p className="card_details_completed">
              <span>
                <img
                  src={checkBoxIcon}
                  className="card_details_checkicon"
                  alt="img"
                />
              </span>{" "}
              Completed
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default LevelCompoment;
