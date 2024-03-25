export interface PreguntasPedido {
  nropregunta:     number;
  nombrepregunta:  string;
  descrippregunta: string;
  combinaciones:   Combinaciones[];
}

export interface Combinaciones {
  nrocomb:    number;
  titulocomb: string;
  imgcomb:    string;
  preccomb:   number;
}
