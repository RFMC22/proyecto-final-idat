import axios from "axios";
import { ComboResponse } from "../interfaces";

export async function getCombos(): Promise<ComboResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_COMBOS);
    return respuesta;
}