import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ children, ...props }) => {
  if (props.isAuth) {
    return props.loggedIn ? <Navigate to='/' replace /> : children;
  }
  return props.loggedIn ? children : <Navigate to='/signin' replace />;
};

export default ProtectedRouteElement;
