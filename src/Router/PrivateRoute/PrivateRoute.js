import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProdiver';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const [user] = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;



};

export default PrivateRoute;