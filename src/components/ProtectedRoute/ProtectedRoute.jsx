import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPath = "/login", user }) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
