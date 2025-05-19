import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

type Comment = {
    name: string;
    message: string;
    date: string;
    rating?: number;
};

export const addComment = async (comment: Comment) => {
    try {
      const commentsCollection = collection(db, 'comments');
      await addDoc(commentsCollection, comment);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
};

const competitorKeywords = ['StarDine', 'FoodKing', 'ByteBite'];
export const fetchComments = async (): Promise<Comment[]> => {
    try {
        const commentsCollection = collection(db, 'comments');
        const q = query(commentsCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs
            .map(doc => doc.data() as Comment)
            .filter(comment =>
                !competitorKeywords.some(keyword =>
                    comment.message.toLowerCase().includes(keyword.toLowerCase()) // check for competitor mentioned
                )
            );
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};
