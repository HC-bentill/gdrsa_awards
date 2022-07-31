import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Awardsboard from "../../pages/awardsboard/Awardsboard";
import Levels from "../../pages/levels/Levels";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
        <Routes>
          <Route path="*" element={<Awardsboard />} />
          <Route path="/levels" element={<Levels />} />
        </Routes>
    </>
  );
}

export default Dashboard;
