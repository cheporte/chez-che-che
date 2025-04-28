import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import dotenv from 'dotenv';
import menuRoutes from './routes/menu';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Firebase initialization
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-${process.env.FIREBASE_PRIVATE_KEY_ID}%40${process.env.FIREBASE_PROJECT_ID}.iam.gserviceaccount.com`
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export const db = admin.firestore();

// Routes
app.use('/api', menuRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
