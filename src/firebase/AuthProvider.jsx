import { createContext, useEffect, useState } from "react";
import app from "./firebase.cofig";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])


    //sign up user
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // signIn user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        }

        )
        return () => unSubscribe()
    }, [])

    const allValues = {
        loading,
        signUpUser,
        signInUser,
        googleSignIn,
        user
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;