import React, { useEffect, useState } from "react";
import "./quiz.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import QuizChoice from "../../components/quizChoice/QuizChoice";
import { getQuiz, postQuiz } from "../../api/level.service";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../../components/Timer/Timer";
import moment from "moment";
import {
  selectQuizData,
  selectQuizQuestions,
  selectSubmitQuiz,
  setQuizDataNull,
  setQuizResult,
  setSubmitQuiz,
} from "../../features/quizSlice";
import swal from "sweetalert";
import Countdown from "react-countdown";
import { destroyItem } from "../../api/jwt.service";

function Quiz() {
  const navigate = useNavigate();
  const { id } = useParams();
  const storedQuestions = useSelector(selectQuizQuestions);
  const questions = storedQuestions.quizQuestions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const quizData = useSelector(selectQuizData);
  const questionsAndAnswers = useSelector(selectSubmitQuiz);
  const time = quizData.quizEndTime;
  const quizId = storedQuestions.quizId;
  const [loading, setLoading] = useState(false);
  
  const handleMarking = () => {
    setLoading(true);
    const quizSubmission = {
      trainingId: "Lorem",
      quizId: quizId,
      submission: questionsAndAnswers,
    };
    postQuiz(quizSubmission)
      .then((response) => {
        setLoading(false);
        if (response.data.ok) {
          dispatch(
            setQuizResult({
              points: response.data.data.details.points,
              levelId: id,
              numberOfQuestions: questions.length,
            })
          );
          if (response.data.data.details.status === "PASSED") {
            navigate("/pass");
            dispatch(setQuizDataNull());
          } else {
            navigate("/failed");
            dispatch(setQuizDataNull());
          }
        } else {
          swal({
            text: response?.data.error.message,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response.data.error.message ===
          "You do not have an active quiz to submit to."
        ) {
          swal({
            text: "Quiz has already been submitted",
            icon: "error",
          }).then(() => {
            navigate("/levels");
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

  const alphabets = {
    1: "A.",
    2: "B.",
    3: "C.",
    4: "D.",
  };

  const handleChoice = (questionId, choiceid) => {
    let answers = { questionId, choiceid };
    dispatch(
      setSubmitQuiz({
        ...answers,
      })
    );
  };

  // useEffect(() => {

  // }, []);

  console.log("questions =", questions);

  const handleNext = () => {
    const nextQuestion = questionIndex + 1;
    nextQuestion < questions.length
      ? setQuestionIndex(nextQuestion)
      : handleMarking();
  };

  const handlePrev = () => {
    const prevQuestion = questionIndex - 1;
    setQuestionIndex(prevQuestion);
  };

  // Random component
  const QuizExpiry = () => {
    swal({
      title: "Time Up !",
      text: "You have exhausted your quiz time Limit",
      icon: "warning",
    }).then(() => {
      handleMarking();
    });
  };

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <QuizExpiry />;
    } else {
      // Render a countdown
      return (
        <span className="countdown">
          {minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <div className="quiz_container">
        <header className="quiz_header text-center">
          <div className="quiz_header_container">
            <BsChevronLeft
              onClick={() => navigate(-1)}
              className="return_icon"
            />
            <p className="quiz_top_text">Quiz</p>
            <div className="quiz_stopwatch">
              <Countdown date={time} renderer={renderer} />
            </div>
            <div className="question_length">
              <span>Question {questionIndex + 1}</span>/{questions?.length}
            </div>
          </div>
        </header>

        {!questions ? (
          <div data-testid="loader" className="centerItems loader_container">
            <>
              <div className="loader"></div>
              <p className="pt-3">Loading... Please Wait</p>
            </>
          </div>
        ) : (
          <div className="quiz_body">
            <small className="quiz_question">
              {`${questions[questionIndex]?.text}`}
            </small>
            <div className="quiz_iframe">
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

            <div className="quiz_choice_container">
              {questions[questionIndex]?.choices?.map((item, idx) => (
                <>
                  <form>
                    <label className="labl">
                      <input
                        type="radio"
                        name="radioname"
                        value={item?.text}
                        checked={questionsAndAnswers[questions[questionIndex]?.id] ===  item.id}
                      />
                      <div
                        className="choice_label"
                        onClick={() =>
                          handleChoice(questions[questionIndex]?.id, item.id)
                        }
                        for=""
                      >
                        <strong>{alphabets[idx + 1]}</strong>
                        <span className="quiz_choice_text">{item?.text}</span>
                      </div>
                    </label>
                  </form>
                </>
              ))}
            </div>

            <div className="custom_flex mt-5">
              <Button
                className="control_button"
                onClick={() => handlePrev()}
                disabled={questionIndex === 0 ? true : false}
              >
                Previous
              </Button>
              {loading ? (
                <Button className="control_button" disabled>
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
                <Button className="control_button" onClick={() => handleNext()}>
                  {questionIndex + 1 === questions.length ? "Submit" : "Next"}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
