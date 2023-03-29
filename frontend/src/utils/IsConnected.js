import { Navigate, useLocation } from 'react-router-dom';

export const IsConnected = ({ children }) => {
  let location = useLocation();

  if (!sessionStorage.getItem('token') && !localStorage.getItem('token')) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};
