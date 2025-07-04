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

  if (!userRole) {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />; 
  }

  return <Outlet />;
};

export default ProtectedRoute;