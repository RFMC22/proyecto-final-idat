import axios from 'axios';

export async function getPreguntas(): Promise<any> {
  const respuesta = await axios.get(
    import.meta.env.VITE_API_URL_PREGUNTAS_PEDIDOS
  );
  return respuesta;
}
