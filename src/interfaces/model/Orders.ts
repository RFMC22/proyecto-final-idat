export interface Order {
  combos:       Combo[];
  complementos: Complemento[];
}

export interface Combo {
  Combo_Extrema: ComboExtremum[];
}

export interface ComboExtremum {
  id:               number;
  nombre:           string;
  descripcion:      string;
  imagen_principal: string;
  sizes:            Size[];
}

export interface Size {
  mediana?: Mediana[];
  grande?:  Grande[];
}

export interface Grande {
  imagen_grande: string;
  texto_grande:  string;
}

export interface Mediana {
  imagen_mediana: string;
  texto_mediana:  string;
}

export interface Complemento {
  preguntas: Pregunta[];
}

export interface Pregunta {
  nropregunta:     number;
  nombrepregunta:  string;
  descrippregunta: string;
  combinaciones:   Combinacione[];
}

export interface Combinacione {
  nrocomb:    number;
  titulocomb: string;
  imgcomb:    string;
  preccomb:   number;
}
