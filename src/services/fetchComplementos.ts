import axios from 'axios';
import { ComplementoResponse } from '../interfaces/';

export async function getComplementosCart(): Promise<ComplementoResponse> {
  const respuesta = await axios.get(import.meta.env.VITE_API_URL_COMPLEMENTOS);
  return respuesta;
}
