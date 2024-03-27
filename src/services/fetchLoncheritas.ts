import axios from 'axios';
import { LoncheraResponse } from '../interfaces';

export const getLoncheritas = async (): Promise<LoncheraResponse> => {
    try {
        const response = await axios.get<LoncheraResponse>(import.meta.env.VITE_API_URL_LONCHERITAS);
        return response.data;
    } catch (error: unknown) { // Aquí estamos especificando el tipo de error como 'unknown'
        throw new Error('Error fetching pollo data: ' + (error as Error).message);
    }
};

