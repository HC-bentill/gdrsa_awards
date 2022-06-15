import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getItem } from "../api/jwt.service";

const Home = React.lazy(() => import("../pages/home/Home"));
const Register = React.lazy(() => import("../pages/register/Register"));
const Otp = React.lazy(() => import("../pages/otp/Otp"));
const SignInOTP = React.lazy(() => import("../pages/otp/SignInOTP"));
const Signin = React.lazy(() => import("../pages/signin/Signin"));
const Tasks = React.lazy(() => import("../pages/tasks/Tasks"));

const loading = (
  <div data-testid="loader" className="loader_container">
    <div className="loader"></div>
  </div>
);

function AppRoutes() {
  const dashboardVisited = getItem("dashboard visited");
  console.log("dashboardVisited = ", dashboardVisited);
  return (
    <>
      <React.Suspense fallback={loading}>
        <Routes>
          {dashboardVisited ? (
            <Route path="*" element={<Home />} />
          ) : (
            <Route path="*" element={<Home />} />
          )}
          <Route path="alt-signin" element={<Signin />} />
          <Route path="otp-signin" element={<SignInOTP />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
          <Route path="tasks" element={<Tasks />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default AppRoutes;
