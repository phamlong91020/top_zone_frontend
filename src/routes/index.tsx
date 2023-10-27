import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateProps) => {
  const user = localStorage.getItem('access_token');
  if (user) return props.children;
  else return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;
