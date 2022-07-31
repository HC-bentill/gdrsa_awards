import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./failed.css";
import { ReactComponent as FailedIcon } from "../../assets/img/pana.svg";
import { useNavigate } from "react-router-dom";
import { selectQuizResult, setQuizData } from "../../features/quizSlice";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

function Failed() {
  const navigate = useNavigate();
  const quizResultData = useSelector(selectQuizResult);
  const dispatch = useDispatch();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 900); //15 minutes after present time

  const storeQuizTime = () => {
    const startTime = new Date(); //present time

    dispatch(
      setQuizData({
        quizStartTime: moment(startTime).format("LTS"),
        quizEndTime: time,
      })
    );
  };

  console.log("quizResultData?.points =", quizResultData?.points);
  return (
    <>
      <div className="failed_container">
        <Row className="failed">
          <Col md={12} sm={12} className="failed_img">
            <div className="centerItems">
              <div className="failed_points">
                {quizResultData?.points} pts <span>⭐</span>
              </div>
            </div>
            <FailedIcon />
          </Col>
          <Col className="text-center" md={12} sm={12}>
            <p className="failed_text">Sorry !</p>
            <p className="failed_sub_text">
              You didn't make it! <br></br>
              Kindly re-watch the video or re-take the quiz
            </p>
            <Button
              className="rewatch_button"
              onClick={() =>  navigate(`/lessons/${quizResultData?.levelId}`)}
              type="submit"
            >
              Re-watch Videos
            </Button>
            <Button
              className="retake_button mt-3"
              onClick={() => navigate(`/quiz-video/${quizResultData?.levelId}`)}
              type="submit"
            >
              Re-take Quiz
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Failed;
