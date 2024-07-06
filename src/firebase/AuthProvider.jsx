import { createContext, useState } from "react";
import app from "./firebase.cofig";
import { getAuth } from "firebase/auth";


const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;