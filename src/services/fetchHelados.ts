import axios from "axios";
import { HeladoResponse } from "../interfaces/responses/HeladoResponse";

export async function getHelados(): Promise<HeladoResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_HELADOS);
    return respuesta;
}