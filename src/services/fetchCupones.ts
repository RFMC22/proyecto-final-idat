import axios from "axios";
import { CuponResponse } from "../interfaces";

export async function getCupones():Promise<CuponResponse>{
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_CUPONES); 
    return respuesta;
}