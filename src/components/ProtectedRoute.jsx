import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const storedUser = localStorage.getItem('currentUser');
  let userRole = null;
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      userRole = user.role;
    } catch (e) {
      console.error("Failed to parse user from localStorage in ProtectedRoute", e);
    }
  }

  // If no user is logged in, redirect to signin
  if (!userRole) {
    return <Navigate to="/signin" replace />;
  }

  // If user role is not in allowedRoles, redirect to dashboard (or an unauthorized page)
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />; // Or a specific unauthorized page
  }

  // If user is logged in and has an allowed role, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;