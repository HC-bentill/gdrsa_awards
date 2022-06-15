import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("../components/dashboard/Dashboard"));
const Levels = React.lazy(() => import("../pages/levels/Levels"));
const Tasks = React.lazy(() => import("../pages/tasks/Tasks"));

const loading = (
  <div data-testid="loader" className="loader_container">
    <div className="loader"></div>
  </div>
);

function LoginRoutes() {
  return (
    <>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default LoginRoutes;
