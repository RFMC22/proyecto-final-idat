export interface Promocion {
  nombre_azul?:     string;
  nombre_negro?:    string;
  nombre:           string;
  descripcion:      string;
  precio_actual:    number;
  precio_antiguo:   number;
  descuento:        number;
  id:               number;
  img:              string;
  terminos_negro?:  string;
  terminos_blanco?: string;
}