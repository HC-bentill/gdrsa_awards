import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Otp from "./pages/otp/Otp";
import Signin from "./pages/signin/Signin";
import Tasks from "./pages/tasks/Tasks";
import Dashboard from "./components/dashboard/Dashboard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Levels from "./pages/levels/Levels";
import {BASE_URL} from './constants/baseURL'

const loading = (
  <div data-testid="loader" className="loader_container">
    <div className="loader"></div>
  </div>
);

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={loading}>
          {user ? (
            <Routes>
              <Route path="*" element={<Dashboard />} />
              <Route path="/levels" element={<Levels />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="signin" element={<Signin />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<Home />} />
              <Route path="otp" element={<Otp />} />
              <Route path="tasks" element={<Tasks />} />
            </Routes>
          )}
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
