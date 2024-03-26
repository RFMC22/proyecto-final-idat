import axios from "axios";
import { PreguntaFrecuenteResponse } from "../interfaces/responses/PreguntasFrecuentesResponse";

export async function getPreguntasFrecuentes(): Promise<PreguntaFrecuenteResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PREGUNTAS_FRECUENTES);
    return respuesta;
}