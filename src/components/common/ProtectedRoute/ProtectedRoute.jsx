import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ children, ...props }) => {
  return props.loggedIn ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRouteElement;
