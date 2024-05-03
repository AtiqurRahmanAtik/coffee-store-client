import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../FireBase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);


    const createUeser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    //sing in
    const LogIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        createUeser,
        loading,
        LogIn
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;