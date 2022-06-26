import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("../components/dashboard/Dashboard"));
const Levels = React.lazy(() => import("../pages/levels/Levels"));
const Tasks = React.lazy(() => import("../pages/tasks/Tasks"));
const Guidelines = React.lazy(() => import("../pages/tasks/Guidelines"));

function LoginRoutes() {
  return (
    <>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/guidelines" element={<Guidelines/>} />
        </Routes>
    </>
  );
}

export default LoginRoutes;
