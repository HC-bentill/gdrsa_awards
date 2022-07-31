import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { BASE_URL } from "./constants/baseURL";
import LoginRoutes from "./routes/LoginRoutes";
import AppRoutes from "./routes/AppRoutes";
import NoInternetConnection from "./NoInternetConnection";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <NoInternetConnection>
        <Router>{user ? <LoginRoutes /> : <AppRoutes />}</Router>
      </NoInternetConnection>
    </div>
  );
}

export default App;
