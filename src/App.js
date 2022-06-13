import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { BASE_URL } from "./constants/baseURL";
import LoginRoutes from "./routes/LoginRoutes";
import AppRoutes from "./routes/AppRoutes";

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
          {user ? <LoginRoutes /> : <AppRoutes />}
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
