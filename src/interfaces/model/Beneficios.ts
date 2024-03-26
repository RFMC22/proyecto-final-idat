export interface Beneficio {
  relacion?: Destinado[];
  frienzone?: Destinado[];
  gileos?: Destinado[];
  destinados?: Destinado[];
}

export interface Destinado {
  id: number;
  nombre: string;
  link: string;
  precio: number;
  img: string;
}
