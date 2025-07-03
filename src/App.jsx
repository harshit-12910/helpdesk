import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket"; 
import MyTicket from "./components/MyTicket";
import UserProfilePage from "./pages/UserProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Signin />} /> 
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} /> 
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/profile" element={<UserProfilePage />} /> 
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;