import express from 'express';
import { getMenuByCategory } from '../controllers/menuController';

const router = express.Router();

router.get('/menu/:category', getMenuByCategory);

export default router;
