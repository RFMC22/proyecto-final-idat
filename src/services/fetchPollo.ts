import axios from 'axios';

export async function getPollo(): Promise<any> {
    const respuesta = await axios.get(
        import.meta.env.VITE_API_URL_POLLO
    );
    return respuesta;
}
