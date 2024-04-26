import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";




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

        updateProfile(auth.currentUser, obj)
    }



    const AuthInfo = {
        createUser, 
        user, 
        setUser, 
        loading, 
        setLoading,
        profileUpdate,
        signIn
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