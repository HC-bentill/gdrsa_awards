import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { BASE_URL } from "./constants/baseURL";

const LoginRoutes = React.lazy(()=>import('./routes/LoginRoutes'))
const AppRoutes = React.lazy(()=>import('./routes/AppRoutes'))

const loading = (
  <div data-testid="loader" className="loader_container">
    <div className="loader"></div>
  </div>
);

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <React.Suspense fallback={loading}>
        <Router>{user ? <LoginRoutes /> : <AppRoutes />}</Router>
      </React.Suspense>
    </div>
  );
}

export default App;
