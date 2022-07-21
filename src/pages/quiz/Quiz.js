import React, { useEffect, useState } from "react";
import "./quiz.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import QuizChoice from "../../components/quizChoice/QuizChoice";
import { getQuiz, postQuiz } from "../../api/level.service";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../../components/Timer/Timer";
import moment from "moment";
import {
  selectQuizData,
  selectSubmitQuiz,
  setQuizData,
  setQuizDataNull,
  setQuizNull,
  setQuizResult,
  setQuizResultNull,
  setSubmitQuiz,
} from "../../features/quizSlice";
import swal from "sweetalert";
import Countdown from "react-countdown";

function Quiz() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const quizData = useSelector(selectQuizData);
  const questionsAndAnswers = useSelector(selectSubmitQuiz);
  const time = quizData.quizEndTime;
  const [quizId, setQuizId] = useState("");


  const handleMarking = () => {
    const quizSubmission = {
      trainingId: "string",
      quizId: quizId,
      submission: questionsAndAnswers,
    };
    postQuiz(quizSubmission)
      .then((response) => {
        if (response.data.ok) {
          dispatch(
            setQuizResult({
              points: response.data.data.details.points,
              levelId: id,
              numberOfQuestions: questions.length,
            })
          );
          if(response.data.data.details.status === "PASSED"){
            navigate("/pass");
          }else{
            navigate("/failed"); 
          }
        } else {
          swal({
            text: response?.data.error.message,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        swal({
          text: error.response.data.error.message,
          icon: "error",
        })
        .then(()=>{navigate('/levels')})
      });
  };

  const alphabets = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };

  const handleChoice = (questionId, choiceid) => {
    let answers = { questionId, choiceid };
    dispatch(
      setSubmitQuiz({
        ...answers,
      })
    );
  };

  useEffect(() => {
    getQuiz(id)
      .then((res) => {
        setQuizId(res?.data.data.lesson.quiz.id)
        const quest = res?.data.data.lesson.quiz.questions;
        setQuestions([...quest]);
      })
      .catch((err) => {
        console.log("quizError =", err);
        // swal({
        //   // title: "Sorry, An Error Occured !",
        //   text: err.response.data.error.message,
        //   icon: "warning",
        // });
      });
      dispatch(setQuizDataNull());
      console.log('i fire once')
  }, [questions, id]);

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
                <div
                  onClick={() =>
                    handleChoice(questions[questionIndex]?.id, item.id)
                  }
                  className="quiz_choice"
                >
                  <p className="quiz_choice_label">{alphabets[idx + 1]}</p>
                  <div className="quiz_choice_text_container">
                    <span className="quiz_choice_text">{item?.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="custom_flex">
              <Button
                className="control_button"
                onClick={() => handlePrev()}
                disabled={questionIndex === 0 ? true : false}
              >
                Previous
              </Button>
              <Button className="control_button" onClick={() => handleNext()}>
                {questionIndex + 1 === questions.length ? "Submit" : "Next"}
              </Button>
            </div>
            {/* <Button
            className="quiz_button"
            onClick={() => navigate("/congrats")}
            type="submit"
          >
            Next
          </Button> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
