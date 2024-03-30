import { BeneficiosResponse } from '../interfaces/responses/BeneficiosResponse';
import { configGetCollection } from './fetchBase';
import { Beneficio } from '../interfaces/model/Beneficios';
import { CollectionsConstants } from '../utils';

// export async function getBeneficios(): Promise<BeneficiosResponse> {
//     const respuesta = await axios.get(import.meta.env.VITE_API_URL_BENEFICIOS)
//     return respuesta;
// }

export async function getBeneficios(): Promise<BeneficiosResponse> {
  const data = await configGetCollection<Beneficio>(
    CollectionsConstants.BENEFICIOS
  );
  return { data: data || [] };
}
