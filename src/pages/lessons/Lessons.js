import React, { useEffect, useState } from "react";
import "./lessons.css";
import { Button } from "react-bootstrap";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import swal from "sweetalert";
import { getLesson, getLessons } from "../../api/lessons.service";
import { storeItem } from "../../api/jwt.service";
import LessonComponent from "../../components/lessonComponents/LessonComponent";


function Lessons() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [level, setLevel] = useState();

  useEffect(() => {
    getLessons(id)
      .then((response) => {
        if (response?.data.ok) {
          setLevel(response?.data.data.levels);
          //store level in local storage for navigation purposes
          storeItem(response?.data.data.levels.title, "level");
        } else {

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

  return (
    <>
      <div className="lessons_container">
        <header className="lesson_header p-3 text-center">
          <div className="lesson_header_container">
            <BsChevronLeft
              onClick={() => navigate("/levels")}
              className="return_icon"
            />
            <div>
              <p className="lesson_top_text">{level?.title}</p>
            </div>
          </div>
          <div
            className="custom_flex"
            style={{ justifyContent: "space-between" }}
          >
            <p className="lesson_sub_text">A little introduction to lesson</p>
            <p className="lesson_timer">
              <AiFillClockCircle className="lesson_timer_icon" /> 15mins
            </p>
          </div>
        </header>

        <div className="lesson_body_container">
          <LessonComponent lessonsID={id} />

          <div className="centerItems">
          <Button
            className="lessons_button_signin"
            onClick={() => navigate(`/quiz-video/${id}`)}
            type="submit"
          >
            Start Quiz
          </Button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Lessons;
