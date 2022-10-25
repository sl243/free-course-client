import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // user register with email and password
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user Sign In with email and password
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user Sign Out 
    const userSignOut = () => {
        return signOut(auth);
    }

    // sign in with google
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign in with github
    const signInGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth , currentUser => {
         
                setUser(currentUser)
            
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        userRegister,
        userSignIn,
        userSignOut,
        signInGoogle,
        signInGithub,
    }

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;