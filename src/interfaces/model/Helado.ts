export interface Helado {
    nombre: string;
    precio: number;
    id: number;
    img: string;
    link: string;
    preguntas: Pregunta[];
}
export interface Pregunta {
    nropregunta: number;
    nombrepregunta: string;
    descrippregunta: string;
    combinaciones: Combinacione[];
}

export interface Combinacione {
    nrocomb: number;
    titulocomb: string;
    imgcomb: string;
    preccomb: number;
}
