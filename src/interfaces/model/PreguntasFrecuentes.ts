export interface IPreguntasFrecuentes {
    preguntas_frecuentes: PreguntasFrecuente[];
}

export interface PreguntasFrecuente {
    hamburguesas: Complemento[];
    pollo: Complemento[];
    loncheritas: Complemento[];
    complementos: Complemento[];
    helados: Complemento[];
    beneficios: Complemento[];
}

interface Complemento {
    titulo: string;
    respuesta: string;
}
