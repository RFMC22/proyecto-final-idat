export interface menuCardOptionsProps {
  img: string;
  text: string;
}

export interface menuProps {
  nombre: string;
  img: string;
  link: string;
  id: number;
}

export interface MenuRequest {
  promociones_personales: menuProps;
}

export interface MenuResponse {
  data?: menuProps[];
}