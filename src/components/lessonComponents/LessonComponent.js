import React, { useEffect, useState } from "react";
import "./lessoncomponent.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getLessons } from "../../api/lessons.service";
import { Carousel } from "react-bootstrap";

function LessonComponent({ lessonsID }) {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons(lessonsID)
      .then((response) => {
        if (response?.data.ok) {
          setLessons([...response?.data.data.levels.lessons]);
        } else {
          console.log("response error =", response);
        }
      })
      .catch((error) => {
        console.log("errormsg = ", error);
        swal({
          // title: "Sorry, An Error Occured !",
          text: "Please check internet connectivity and Try again",
          icon: "warning",
        });
      });
  }, []);
  console.log("lessons =", lessons);

  return (
    <>
      <div className="lesson_component_container">
        <div>
          {lessons.map((item, idx) => (
            <>
              <p idx={idx} className="lesson_component_label text-center">
                {`Lesson ${idx + 1}`}
              </p>
              <div className="">
                <Carousel className="lesson_carousel" interval={null}>
                  {item?.media.map((media, mediaIdx) => (
                    <Carousel.Item key={mediaIdx}>
                      <iframe
                        src={media?.video}
                        className="iframe"
                        frameBorder="0"
                        allowFullScreen
                        title="video"
                        width="100%"
                      />
                      {/* <Carousel.Caption>
                        <h6>{media?.language}</h6>
                      </Carousel.Caption> */}
                    </Carousel.Item>
                  ))}
                </Carousel>
                <p className="lesson_component_description">
                  {item?.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default LessonComponent;
