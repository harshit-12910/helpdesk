import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

// Import your page components
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket"; // Make sure this import is here
import MyTicket from "./components/MyTicket";
import UserProfilePage from "./pages/UserProfilePage"; // Make sure this import is here (even if the file is empty for now)
import EditProfilePage from "./pages/EditProfilePage";
// Import the Layout component that holds your shared UI (nav, sidebar, footer)
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (No shared layout - e.g., login, signup, forgot password) */}
        {/* These routes will render without the top navbar, sidebar, or footer */}
        <Route path="/" element={<Signin />} /> {/* Default route, often directs to sign-in */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* --- */}

        {/* Protected Routes (Rendered within the Layout component) */}
        {/* When you hit any of these paths, the <Layout> component will be rendered, */}
        {/* and the specific 'element' (e.g., <NewTicket />) will be placed inside its <Outlet /> */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} /> {/* THIS IS THE KEY LINE for NewTicket */}
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/profile" element={<UserProfilePage />} /> {/* Don't forget this one for the user icon! */}
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Route>

        {/* Optional: Add a catch-all route for 404 Not Found pages if needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;