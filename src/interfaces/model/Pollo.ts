
// export interface Pollo {
//     pollo: Pollo[];
// }

export interface Pollo {
    tipos?: Tipo[];
    preguntas?: Pregunta[];
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

export interface Tipo {
    nombre: string;
    precio: number;
    id: number;
    img: string;
    link: string;
}
