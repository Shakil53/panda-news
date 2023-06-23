import React, { createContext } from 'react';

export const AuthContex = createContext();

const AuthProdiver = ({ children }) => {

    const user = { display: 'Akash Ali' }

    const authInfo = { user };

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProdiver;