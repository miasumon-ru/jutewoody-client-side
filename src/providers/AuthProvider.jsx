import { createContext } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const AuthInfo = {}

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