import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const AuthProvider = ({children}) => {

    const [loading, setLoading] =useState(true);
    const [user, setUser] = useState(null);

    // Create User Function
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password); 
    }
    // 

    const userInfo={
         createUser
        
    }
    return( <AuthContext value={userInfo}>
        {children}
    </AuthContext>) ;
};

export default AuthProvider;