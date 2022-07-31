import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../components/dashboard/Dashboard";
import Levels from "../pages/levels/Levels";
import Tasks from "../pages/tasks/Tasks";
import Guidelines from "../pages/tasks/Guidelines";
import Lessons from "../pages/lessons/Lessons";
import QuizVideo from "../pages/quizVideo/QuizVideo";
import Quiz from "../pages/quiz/Quiz";
import Congrats from "../pages/congrats/Congrats";
import Failed from "../pages/failed/Failed";
import Pass from "../pages/pass/Pass";
import { useSelector } from "react-redux";
import { selectQuizSession } from "../features/quizSlice";

function LoginRoutes() {
  const quizSession = useSelector(selectQuizSession);
  console.log("quizSession =", quizSession);

  return (
    <>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/lessons/:id" element={<Lessons />} />
        <Route path="/quiz-video/:id" element={<QuizVideo />} />
        {quizSession ? (
          <Route path="/quiz/:id" element={<Quiz />} />
        ) : (
          <Route path="/levels" element={<Levels />} />
        )}
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </>
  );
}

export default LoginRoutes;
