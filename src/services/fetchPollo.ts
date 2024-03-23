import axios from 'axios';
import { PolloResponse } from '../interfaces/responses/PolloResponse';

export const getPollo = async (): Promise<PolloResponse> => {
    try {
        const response = await axios.get<PolloResponse>('URL_DE_TU_API_AQUÍ');
        return response.data;
    } catch (error: unknown) { // Aquí estamos especificando el tipo de error como 'unknown'
        throw new Error('Error fetching pollo data: ' + (error as Error).message);
    }
};