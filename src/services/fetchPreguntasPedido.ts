
import { PreguntasPedido, PreguntasResponse } from '../interfaces';
import { configGetCollection } from './fetchBase';
import { CollectionsConstants } from '../utils';

export async function getPreguntas(): Promise<PreguntasResponse> {
  const data = await configGetCollection<PreguntasPedido>(
    CollectionsConstants.PREGUNTAS_PEDIDOS
  );
  return { data: data || [] };
}
