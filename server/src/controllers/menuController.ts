import { Request, Response } from 'express';
import admin from 'firebase-admin';

import { db } from '../index';

type CustomError = {
  name: string;
  message: string;
  statusCode: number;
};

export const getMenuByCategory = async (req: Request, res: Response): Promise<void> => {
  const category = req.params.category;

  try {
    const menuItems = await db.collection(category).get();
    const menuData = menuItems.docs.map(doc => doc.data());
    res.json(menuData);
  } catch (error) {
    const customError: CustomError = {
      name: "Failed to fetch data",
      message: (error as Error).message,
      statusCode: 500,
    };
    res.status(customError.statusCode).send(customError.message);
  }
};
