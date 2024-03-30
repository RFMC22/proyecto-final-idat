import axios from 'axios';
import { Pollo } from '../interfaces/model/Pollo';

export const getPollo = async (): Promise<Pollo[]> => {
    try {
        const response = await axios.get<Pollo[]>(import.meta.env.VITE_API_URL_POLLO);        
        return response.data;
    } catch (error: unknown) { // Aquí estamos especificando el tipo de error como 'unknown'
        throw new Error('Error fetching pollo data: ' + (error as Error).message);
    }
};
