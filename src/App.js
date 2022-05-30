import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Otp from './pages/otp/Otp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
