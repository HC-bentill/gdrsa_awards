import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("../components/dashboard/Dashboard"));
const Levels = React.lazy(() => import("../pages/levels/Levels"));
const Tasks = React.lazy(() => import("../pages/tasks/Tasks"));
const Guidelines = React.lazy(() => import("../pages/tasks/Guidelines"));
const Lessons = React.lazy(() => import("../pages/lessons/Lessons"));
const QuizVideo = React.lazy(() => import("../pages/quizVideo/QuizVideo"));
const Quiz = React.lazy(() => import("../pages/quiz/Quiz"));
const Congrats = React.lazy(() => import("../pages/congrats/Congrats"));
const Failed = React.lazy(() => import("../pages/failed/Failed"));
const Pass = React.lazy(() => import("../pages/pass/Pass"));

function LoginRoutes() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/lessons/:id" element={<Lessons />} />
        <Route path="/quiz-video/:id" element={<QuizVideo />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </>
  );
}

export default LoginRoutes;
