import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Awardsboard = React.lazy(() => import("../../pages/awardsboard/Awardsboard"));
const Levels = React.lazy(() => import("../../pages/levels/Levels"));

const loading = (
  <>
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p>Loading... Please Wait</p>
  </>
);

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<Awardsboard />} />
          <Route path="/levels" element={<Levels />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default Dashboard;
