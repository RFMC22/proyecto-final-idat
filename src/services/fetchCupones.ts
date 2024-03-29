import { Cupon, CuponResponse } from "../interfaces";
import { CollectionsConstants } from "../utils";
import { configGetCollection } from "./fetchBase";

export async function getCupones():Promise<CuponResponse>{
    const data = await configGetCollection<Cupon>(CollectionsConstants.CUPONES); 
    return {data:data || []};
}