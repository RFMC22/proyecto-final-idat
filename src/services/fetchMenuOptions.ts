import axios from 'axios';

import { MenuResponse } from '../interfaces';

export async function getMenuOptions(): Promise<MenuResponse> {
  const respuesta = await axios.get(import.meta.env.VITE_API_URL_MENU);
  return respuesta;
}
