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
import { createUserProfile } from '@services/createUser';

export const registerUser = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return createUserProfile(user);
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
