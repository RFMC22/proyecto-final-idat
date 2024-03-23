import React from 'react';
import PreguntasFrecuentes from '../components/shared/PreguntasFrecuentes';
import { getPreguntasFrecuentes } from '../services';
import { useEffect, useState } from 'react';
import { PreguntaFrecuenteResponse } from '../interfaces';

const Beneficios = () => {
  const [preguntasFrecuentes, setPreguntasFrecuentes] =
    useState<PreguntaFrecuenteResponse>();

  try {
    useEffect(() => {
      const getDataOrders = async () => {
        const data = await getPreguntasFrecuentes();
        return setPreguntasFrecuentes(data);
      };
      getDataOrders();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="Beneficios">
      <PreguntasFrecuentes
        title="¿Cuántos puntos recibo por comprar una hamburguesa online delivery?"
        children="Los puntos que se reciben por la compra de algún producto de nuestra carta de hamburguesas varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web."
      />
    </section>
  );
};

export default Beneficios;
