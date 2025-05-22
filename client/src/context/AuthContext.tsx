import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { observeUser, loginUser, registerUser, logoutUser, continueWithGoogle } from "../firebase/authService";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loginWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used with AuthProvider');
    return context;
};


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = observeUser((firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
      return unsubscribe;
    }, []);
  
    const login = async (email: string, password: string) => {
      await loginUser(email, password);
    };
  
    const register = async (email: string, password: string) => {
      await registerUser(email, password);
    };
  
    const logout = async () => {
      await logoutUser();
    };

    const loginWithGoogle = async () => {
      await continueWithGoogle();
    }
  
    return (
      <AuthContext.Provider value={{ user, loading, login, register, logout, loginWithGoogle }}>
        {children}
      </AuthContext.Provider>
    );
};