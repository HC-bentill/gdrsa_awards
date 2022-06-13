import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Levels from "../pages/levels/Levels";
import Tasks from "../pages/tasks/Tasks";

function LoginRoutes() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default LoginRoutes;
