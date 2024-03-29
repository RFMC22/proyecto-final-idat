import axios from "axios";
import { MenuAlPlatoResponse } from "../interfaces/responses/MenuAlPlatoResponse";

export async function getMenusAlPlato(): Promise<MenuAlPlatoResponse> {
    const respuesta = await axios.get(import.meta.env.VITE_API_URL_MENUS_AL_PLATO);
    return respuesta;
}