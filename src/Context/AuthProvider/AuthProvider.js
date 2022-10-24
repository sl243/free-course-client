import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const user = {displayName: 'Webcode Course'}

    const AuthInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;