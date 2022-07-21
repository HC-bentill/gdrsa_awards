import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import "./quizvideo.css";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { setQuizData } from "../../features/quizSlice";
import moment from "moment";
import { useDispatch } from "react-redux";

function QuizVideo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleConfirmation = () => {
    swal({
      text: "Are you sure you want to Start Quiz ?",
      buttons: true,
      buttons: ["No", "Yes"],
    }).then((confirmed) => {
      if (confirmed) {
        navigate(`/quiz/${id}`);
        storeQuizTime();
      }
    });
  };

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

  return (
    <>
      <div className="quiz_video_container">
        <header className="quiz_video_header text-center">
          <div className="quiz_video_header_container">
            <BsChevronLeft
              onClick={() => navigate(-1)}
              className="return_icon"
            />
            <p className="quiz_video_top_text">
              Ghana Driver & Road Safety Awards 2022
            </p>
          </div>
          <p className="quiz_video_second_text">
            A video on how to take the quiz
          </p>
        </header>

        <div className="quiz_video_body">
          <div className="quiz_video_iframe">
            <iframe
              src="https://www.youtube.com/embed/668nUCeBHyY"
              frameBorder="0"
              // allow='autoplay; encrypted-media'
              allowFullScreen
              title="video"
              width="100%"
              height="100%"
            />
          </div>

          <div className="centerItems">
            <Button
              className="quiz_video_button"
              onClick={() => handleConfirmation()}
              type="submit"
            >
              Now start quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizVideo;
