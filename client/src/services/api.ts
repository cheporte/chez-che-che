import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export type DishType = {
  name: string;
  price: string;
  imageUrl: string;
  ingredients: string[];
};

export const fetchMenu = async (category: string): Promise<DishType[]> => {
  try {
    const response = await axios.get(`${API_URL}/menu/${category}`);
    return response.data as DishType[];
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};
