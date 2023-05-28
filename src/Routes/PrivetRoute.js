import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
   if(loading){
    return <button className="btn loading">loading</button>
   }
   
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivetRoute;