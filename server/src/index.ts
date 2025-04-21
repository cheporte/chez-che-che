import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import dotenv from 'dotenv';

interface CustomError extends Error {
  name: string;
  message: string;
  statusCode: number;
}

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

// firebase init
const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40chez-che-che-be121.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

const db = admin.firestore();

app.get('/menu/starters', async (req, res) => {
  try {
    const starters = await db.collection('starters').get();
    const startersData = starters.docs.map(doc => doc.data());
    res.json(startersData);
  } catch (error) {
    const customError: CustomError = {
      name: "Failed to fetch data",
      message: (error as Error).message,
      statusCode: 500,
    };
    res.status(customError.statusCode).send(customError.message);
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
