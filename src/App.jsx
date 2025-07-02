import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup"; 
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

