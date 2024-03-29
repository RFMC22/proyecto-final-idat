import axios from 'axios';
import { PolloResponse } from '../interfaces';

export const getPollo = async (): Promise<PolloResponse> => {
    try {
        const response = await axios.get<PolloResponse>(import.meta.env.VITE_API_URL_POLLO);        
        return response.data;
    } catch (error: unknown) { // Aquí estamos especificando el tipo de error como 'unknown'
        throw new Error('Error fetching pollo data: ' + (error as Error).message);
    }
};
