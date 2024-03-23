import axios from "axios";
import { PromocionCompartirResponse, PromocionDosResponse, PromocionPersonalResponse } from "../interfaces";

export async function getPromosPersonales():Promise<PromocionPersonalResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PROMOCIONES_PERSONALES);    
    return respuesta;
}
export async function getPromosDos():Promise<PromocionDosResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PROMOCIONES_PARA_DOS);    
    return respuesta;
}
export async function getPromosCompartir():Promise<PromocionCompartirResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PROMOCIONES_PARA_COMPARTIR);    
    return respuesta;
}