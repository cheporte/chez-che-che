import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User
} from 'firebase/auth';
import { auth } from './firebase';

export const registerUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const logoutUser = () => {
    return signOut(auth);
}

export const observeUser = (callback: (user : User | null) => void) => {
    return onAuthStateChanged(auth, callback);
}