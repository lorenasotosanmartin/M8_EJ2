import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';



/*  const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
    const { user } = useAuth();
  
  return (
      <Route {...rest} render={(props) => {
        if (!user) {
          return <Navigate to='/login' />;
        }
  
        if (roles && !roles.includes(user.role)) {
          return <Navigate to='/' />;
        }
  
        return <Component {...props} />;
      }} />
    );*/
  //};
  

  const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth();
    console.log(user)
    if (!user) {
      return <Navigate to='/login' />;
    }
  
    console.log(user.role)
    console.log(role)
    if(role[0]!=user.role){
      return <Navigate to='/login' />;
    }

    return children
  }
  export default ProtectedRoute;
