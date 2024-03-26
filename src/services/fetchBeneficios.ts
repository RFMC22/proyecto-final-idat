import axios from "axios";
import { BeneficiosResponse } from "../interfaces/responses/BeneficiosResponse";


export async function getBeneficios(): Promise<BeneficiosResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_BENEFICIOS)
    return respuesta;
}