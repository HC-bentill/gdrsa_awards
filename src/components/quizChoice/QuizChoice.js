import React from "react";
import "./quizchoice.css";

function QuizChoice({ idx, item }) {

  const alphabets = {
    1 : "A",
    2: "B",
    3: "C",
    4: "D",
  }

  return (
    <>
        <div className="quiz_choice">
          <p className="quiz_choice_label">{alphabets[idx + 1]}</p>
          <div className="quiz_choice_text_container">
            <span className="quiz_choice_text">{item?.text}</span>
          </div>
        </div>
    </>
  );
}

export default QuizChoice;
