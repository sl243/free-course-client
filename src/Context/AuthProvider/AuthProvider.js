import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // user register with email and password
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user Sign In with email and password
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user Sign Out 
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // sign in with google
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // sign in with github
    const signInGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // user email verification
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

     // user profile update
     const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        setLoading,
        userRegister,
        userSignIn,
        userSignOut,
        signInGoogle,
        signInGithub,
        emailVerification,
        profileUpdate,
    }

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;