import axios from "axios";
import { PromocionPersonalResponse } from "../interfaces";

export async function getPromosPersonales():Promise<PromocionPersonalResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PROMOCIONES_PERSONALES);    
    return respuesta;
}