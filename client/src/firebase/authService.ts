import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from './firebase';

export const registerUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const continueWithGoogle = async () => {
    const googleAuth = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleAuth);
}

export const logoutUser = () => {
    return signOut(auth);
}

export const observeUser = (callback: (user : User | null) => void) => {
    return onAuthStateChanged(auth, callback);
}

export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};