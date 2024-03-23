import axios from "axios";
import { InkaChipsResponse } from "../interfaces/responses/InkaChipsResponse";

export async function getInkaChips(): Promise<InkaChipsResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_INKACHIPS);
    return respuesta;
}