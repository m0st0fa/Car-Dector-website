/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
            const userEmail = CurrentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(CurrentUser)
            setLoding(false)
            console.log('checking the current user', CurrentUser)
            // if user exists then issue the token 
            if (CurrentUser) {
                axios.post('http://localhost:5001/jwt', loggedUser, { withCredential: true })
                    .then(res => {
                        console.log('toeken Response', res.data)
                    })
            } else {
                axios.post('http://localhost:5001/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.error('Error logging out:', error);
                    });

            }

        })
        return () => {
            return unsubscribe
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;