import axios from "axios";
import { BebidaResponse } from "../interfaces/responses/BebidaResponse";

export async function getBebidas(): Promise<BebidaResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_BEBIDAS);
    return respuesta;
}