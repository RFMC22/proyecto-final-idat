export interface PreguntasFrecuentes {
    preguntas_frecuentes: PreguntasFrecuente[];
}

export interface PreguntasFrecuente {
    hamburguesas: Complemento[];
    pollo: Complemento[];
    loncheritas: Complemento[];
    complementos: Complemento[];
    helados: Complemento[];
}

export interface Complemento {
    titulo: string;
    respuesta: string;
}
