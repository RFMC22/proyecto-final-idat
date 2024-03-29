import axios from "axios";
import { PromocionCompartirResponse, PromocionDosResponse, PromocionPersonalResponse } from "../interfaces";
import { configGetCollection } from "./fetchBase";
import CollectionsConstants from "../utils/CollectionConstants";
import { Promocion } from "../interfaces/model/Promocion";

export async function getPromosPersonales():Promise<PromocionPersonalResponse>{
    const data = await configGetCollection<Promocion>(CollectionsConstants.PROMOCIONES_PERSONALES);
    return { data: data ?? [] }
}
export async function getPromosDos():Promise<PromocionDosResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PROMOCIONES_PARA_DOS);    
    return respuesta;
}
export async function getPromosCompartir():Promise<PromocionCompartirResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_PROMOCIONES_PARA_COMPARTIR);    
    return respuesta;
}