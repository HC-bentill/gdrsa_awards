import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getItem } from "../api/jwt.service";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Otp from "../pages/otp/Otp";
import SignInOTP from "../pages/otp/SignInOTP";
import Signin from "../pages/signin/Signin";
import Tasks from "../pages/tasks/Tasks";
import About from "../pages/aboutUs/About";
import Letter from "../pages/letter/Letter";



function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="alt-signin" element={<Signin />} />
        <Route path="otp-signin" element={<SignInOTP />} />
        <Route path="register" element={<Register />} />
        <Route path="otp" element={<Otp />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="about-us" element={<About />} />
        <Route path="letter" element={<Letter />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
