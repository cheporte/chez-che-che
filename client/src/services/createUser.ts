import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { User } from 'firebase/auth';

export const createUserProfile = async (user: User) => {
  const userRef = doc(db, 'users', user.uid);

  const userData = {
    uid: user.uid,
    email: user.email,
    createdAt: new Date(),
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    role: 'user',
  };

  await setDoc(userRef, userData, { merge: true });
};
