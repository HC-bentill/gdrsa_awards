import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./pass.css";
import { ReactComponent as PassIcon } from "../../assets/img/great.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuizResult } from "../../features/quizSlice";
import { getLevels } from "../../api/level.service";
import { getItem } from "../../api/jwt.service";
import swal from "sweetalert";

function Pass() {
  const navigate = useNavigate();
  const quizResultData = useSelector(selectQuizResult);
  const [levels, setLevels] = useState([]);
  const [passText, setPassText] = useState("");
  const completedLevel = getItem("level");

  const handlePassText = () => {
    if (completedLevel === "Level 1") {
      setPassText("Round 1, level 1 Complete. Click Next for level 2");
    } else if (completedLevel === "Level 2") {
      setPassText("Round 1, level 2 Complete. Click Next for level 3");
    } else if (completedLevel === "Level 3") {
      setPassText("Round 1, level 3 Complete. Click Next to Continue");
    }
  };

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

    handlePassText();
  }, []);

  const handleNavigation = () => {
    navigate("/levels");
    if (completedLevel === "Level 1") {
      navigate(
        `/lessons/${levels?.filter((x) => x.title === "Level 2")[0]?.id}`
      );
      setPassText("Round 1, level 1 Complete. Click Next for level 2");
    } else if (completedLevel === "Level 2") {
      navigate(
        `/lessons/${levels?.filter((x) => x.title === "Level 3")[0]?.id}`
      );
    } else if (completedLevel === "Level 3") {
      navigate(`/congrats`);
    }
  };

  console.log("levels", levels);

  return (
    <>
      <div className="pass_container">
        <Row className="pass">
          <Col md={12} sm={12} className="pass_img">
            <div className="centerItems">
              <div className="pass_points">
                {`${quizResultData.points} / ${quizResultData.numberOfQuestions}`}{" "}
                <span></span>
              </div>
            </div>
            <div className="centerItems">
              <PassIcon />
            </div>
          </Col>
          <Col className="text-center" md={12} sm={12}>
            <p className="pass_text">Great 🎉</p>
            <p className="pass_sub_text">{passText}</p>
            <Button
              className="retake_button mt-5"
              onClick={() => handleNavigation()}
              type="submit"
            >
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pass;
