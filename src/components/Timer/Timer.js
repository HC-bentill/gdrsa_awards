import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import swal from "sweetalert";
import { selectQuizData } from "../../features/quizSlice";
import { useDispatch, useSelector } from "react-redux";

const Timer = React.memo(({ expiryTimestamp }) => {
  const navigate = useNavigate();
  const quizData = useSelector(selectQuizData);
  const quizExpiryTime = quizData.quizEndTime;
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () =>
      swal({
        title: "Time Up !",
        text: "You have exhausted your quiz time Limit",
        icon: "warning",
      }).then(navigate("/fail")),
  });
  return (
    <div style={{ fontSize: "18px", color: "white" }}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
})

export default Timer;
