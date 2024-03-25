import axios from "axios";
import { LoncheraResponse } from "../interfaces/responses/LoncheritaResponse";

export async function getLoncheritas(): Promise<LoncheraResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_LONCHERITAS);
    return respuesta;
}