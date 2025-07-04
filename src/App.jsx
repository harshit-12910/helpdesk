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
import ProtectedRoute from "./components/ProtectedRoute";

import AdminDatabasePage from "./pages/AdminDatabasePage.jsx";
import AdminSettingsPage from "./pages/AdminSettingPage.jsx";
import AdminUserLogHistoryPage from "./pages/AdminUserLogHistoryPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<Layout />}>
          <Route element={<ProtectedRoute allowedRoles={['admin', 'standard_user']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['standard_user']} />}>
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/my-ticket" element={<MyTicket />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/database" element={<AdminDatabasePage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route path="/admin/log-history" element={<AdminUserLogHistoryPage />} />

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