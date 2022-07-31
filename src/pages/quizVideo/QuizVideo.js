import React, { useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import "./quizvideo.css";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import {
  selectQuizData,
  selectQuizSession,
  setQuizData,
  setQuizQuestions,
  setQuizSession,
} from "../../features/quizSlice";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../api/level.service";
import { getItem, storeItem } from "../../api/jwt.service";

function QuizVideo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const storedQuizTime = useSelector(selectQuizData);
  const quizSession = useSelector(selectQuizSession);

  const handleQuizRequest = () => {
    getQuiz(id)
      .then((res) => {
        dispatch(
          setQuizQuestions({
            quizId: res?.data.data.lesson.quiz.id,
            quizQuestions: res?.data.data.lesson.quiz.questions,
          })
        );
      })
      .catch((error) => {
        console.log("quizerroror =", error);
        if (
          error.response.data.error.message ===
          "There is an already active quiz for this user."
        ) {
          swal({
            text: 'Quiz is already in progress. Click "OK" to continue',
          });
        } else {
          swal({
            text: error?.data.error.message,
            icon: "error",
          }).then(() => {
            navigate("/levels");
          });
        }
      });
  };

  const handleConfirmation = () => {
    swal({
      text: "Are you sure you want to Start Quiz ?",
      buttons: true,
      buttons: ["No", "Yes"],
    }).then((confirmed) => {
      if (confirmed) {
        navigate(`/quiz/${id}`);
        handleQuizRequest();
        if (quizSession) {
          getStoredTime();
        } else {
          storeQuizTime();
          dispatch(setQuizSession(true));
        }
      }
    });
  };

  const getStoredTime = () => {
    dispatch(
      setQuizData({
        quizStartTime: storedQuizTime.quizStartTime,
        quizEndTime: storedQuizTime.quizEndTime,
      })
    );
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
