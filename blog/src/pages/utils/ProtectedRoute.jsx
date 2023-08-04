import { Navigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem('user');
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;