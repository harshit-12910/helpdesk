// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

// Import your page components
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket";
import MyTicket from "./components/MyTicket";
import UserProfilePage from "./pages/UserProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Admin specific pages
import AdminDatabasePage from "./pages/AdminDatabasePage.jsx";
import AdminSettingsPage from "./pages/AdminSettingPage.jsx";
import AdminUserLogHistoryPage from "./pages/AdminUserLogHistoryPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes (Rendered within the Layout component) */}
        <Route element={<Layout />}>
          {/* Routes accessible to ALL authenticated users */}
          <Route element={<ProtectedRoute allowedRoles={['admin', 'standard_user']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
          </Route>

          {/* Routes accessible only to 'standard_user' */}
          <Route element={<ProtectedRoute allowedRoles={['standard_user']} />}>
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/my-ticket" element={<MyTicket />} />
          </Route>

          {/* Routes accessible only to 'admin' */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            {/* Main Admin Pages */}
            <Route path="/admin/database" element={<AdminDatabasePage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route path="/admin/log-history" element={<AdminUserLogHistoryPage />} />

            {/* NEW: Nested Database Routes - All pointing to AdminDatabasePage */}
            <Route path="/admin/user-database" element={<AdminDatabasePage />} />
            <Route path="/admin/opsteam-database" element={<AdminDatabasePage />} />
            <Route path="/admin/techsupport-database" element={<AdminDatabasePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;