import axios from "axios";
import { PolloResponse } from "../interfaces/responses/PolloResponse";

export async function getPollo(): Promise<PolloResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_POLLO);
    return respuesta;
}