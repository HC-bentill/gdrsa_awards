import React, { useState } from "react";
import "./phoneInterview.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { InlineWidget } from "react-calendly";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const PhoneInterview = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="phone_container">
        <div className="phone_header" onClick={() => navigate(-1)}>
          <BsChevronLeft
            style={{ marginRight: "10px" }}
            className="return_icon"
          />
          <p className="text-center phone_title">Interview Onboarding Video</p>
        </div>
        <div className="phone_video_iframe centerItems">
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
        <Button
          className="quiz_video_button"
          onClick={() => handleShow()}
          type="submit"
        >
          Schedule Interview
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="centerItems pt-5">
          <p className="modal_heading">Schedule Interview</p>
          <InlineWidget
            url="https://calendly.com/drifan/30min"
            prefill={{
              name: `${user?.firstName + " " + user?.lastName}`,
              email: "drifan2021@gmail.com",
            }}
          />{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PhoneInterview;
