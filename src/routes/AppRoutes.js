import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Otp from "../pages/otp/Otp";
import SignInOTP from "../pages/otp/SignInOTP";
import Signin from "../pages/signin/Signin";
import Tasks from "../pages/tasks/Tasks";
import { getItem } from "../api/jwt.service";

function AppRoutes() {
  const dashboardVisited = getItem("dashboard visited");
 console.log("dashboardVisited = ", dashboardVisited)
  return (
    <>
      <Routes>
        {dashboardVisited ? (
          <Route path="*" element={<Signin />} />
        ) : (
          <Route path="*" element={<Home />} />
        )}
        <Route path="*" element={<Signin />} />
        <Route path="otp-signin" element={<SignInOTP />} />
        <Route path="register" element={<Register />} />
        <Route path="otp" element={<Otp />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
