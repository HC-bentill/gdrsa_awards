import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./congrats.css";
import ReactConfetti from "react-confetti";
import { ReactComponent as CongratsIcon } from "../../assets/img/amico.svg";
import { useNavigate } from "react-router-dom";

function Congrats() {
    const navigate = useNavigate();
  return (
    <>
      <div className="congrats_container">
        <Row className="congrats">
          <Col md={12} sm={12} className="congrats_img">
            <CongratsIcon />
            <ReactConfetti width={window.innerWidth} height={350} />
          </Col>
          <Col className="text-center" md={12} sm={12}>
            <p className="congrats_text">Congrats 🎉</p>
            <p className="congrats_sub_text">
              You have successfully completed the
              <strong> Ghana Driver Awards 2022 Training and Quiz</strong>. Click
              <strong> Next</strong> to go to the next round of the competition.
            </p>
            <div className="centerItems">
              <Button
                className="congrats_button"
                onClick={() => navigate("/")}
                type="submit"
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Congrats;
