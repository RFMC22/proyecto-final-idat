import { PromocionCompartirResponse, PromocionDosResponse, PromocionPersonalResponse } from "../interfaces";
import { configGetCollection } from "./fetchBase";
import { Promocion } from "../interfaces/model/Promocion";
import { CollectionsConstants } from "../utils";

export async function getPromosPersonales():Promise<PromocionPersonalResponse>{
    const data = await configGetCollection<Promocion>(CollectionsConstants.PROMOCIONES_PERSONALES);
    return { data: data ?? [] }
}
export async function getPromosDos():Promise<PromocionDosResponse>{
    const data = await configGetCollection<Promocion>(CollectionsConstants.PROMOCIONES_PARA_DOS);    
    return { data: data ?? [] };
}
export async function getPromosCompartir():Promise<PromocionCompartirResponse>{
    const data = await configGetCollection<Promocion>(CollectionsConstants.PROMOCIONES_PARA_COMPARTIR);    
    return { data: data ?? [] };
}