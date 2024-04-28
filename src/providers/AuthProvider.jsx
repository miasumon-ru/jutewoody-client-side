import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();




export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create User
    const createUser = (email, password) => {   
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update User's Profile

    const profileUpdate = (obj) => {
        setLoading(true)

        updateProfile(auth.currentUser, obj)
    }

       // GoogleL Login

       const loginWithGoogle = () => {
        
        return signInWithPopup(auth, googleProvider)
    }

    // Github Login

    const loginWithGithub = () => {

        return signInWithPopup(auth, githubProvider)
    }

    // sign out

    const logOut = () => {
      
        return signOut(auth)
    }

    // onAuthStateChange, an observer

    useEffect(()=> {

         const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
         })

         return ()=> {
            unSubscribe()
         }

    }, [])
   
   



    const AuthInfo = {
        createUser, 
        user, 
        setUser, 
        setLoading,
        profileUpdate,
        signIn,
        loginWithGoogle,
        loginWithGithub,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo} >

            {children}
            
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}

export default AuthProvider;