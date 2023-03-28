import { useSelector } from 'react-redux';
import { userToken } from './selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const IsConnected = ({ children }) => {
  const auth = useSelector(userToken);
  let location = useLocation();

  if (auth === null) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};
