"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// FirebaseContext Type
type FirebaseContextType = {
  signupUserWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  singinUserWithEmailAndPass: (email: string, password: string) => Promise<void>;
  signinWithGoogle: () => Promise<void>;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
};

// FirebaseContext
const FirebaseContext = createContext<FirebaseContextType | null>(null);

// useFirebase Hook
export const useFirebase = () => useContext(FirebaseContext) as FirebaseContextType;

// FirebaseProvider Props Type
interface FirebaseProviderProps {
  children: ReactNode;
}

// FirebaseProvider Component
export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const signupUserWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const singinUserWithEmailAndPass = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinWithGoogle = async (): Promise<void> => {
    await signInWithPopup(firebaseAuth, googleProvider);
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
    });
    return () => unsubscribe();
  }, []);

  const isLoggedIn = !!user;

  const logout = async (): Promise<void> => {
    await signOut(firebaseAuth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        signinWithGoogle,
        isLoggedIn,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};