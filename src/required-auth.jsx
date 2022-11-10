import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "./auth-context";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { access_token, roles } = useAuthState();

  const isAuthorizedToView = () =>
    roles?.find((role) => allowedRoles?.includes(role));

  const hasRoles = !!roles;
  const hasAccess_token = !!access_token;
  const hasRoleToViewAndAuthenticated = hasAccess_token && isAuthorizedToView;

  return hasRoleToViewAndAuthenticated ? (
    <Outlet />
  ) : hasAccess_token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
