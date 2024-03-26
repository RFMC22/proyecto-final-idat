import { PreguntaFrecuenteResponse } from '../../interfaces';
import { getPreguntasFrecuentes } from '../../services';
import './../../styles/PreguntasFrecuentes.css';
import React, { useEffect, useState } from 'react';
import abierto from '../../../public/abierto.png'
import cerrado from '../../../public/cerrado.png'



interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const PreguntasFrecuentes: React.FC<AccordionSectionProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imgFalse = <img src={abierto} alt="" />
  const imgTrue = <img src={cerrado} alt="" />

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [preguntasFrecuentes, setPreguntasFrecuentes] = useState<PreguntaFrecuenteResponse>({});

  useEffect(() => {
    const getFrecuentes = async () => {
      const data = await getPreguntasFrecuentes();
      return setPreguntasFrecuentes(data);
    };

    getFrecuentes();
  }, [getPreguntasFrecuentes]);
  console.log(preguntasFrecuentes.data)

  return (

    <div className='contendor-principal-accordion'>
      {preguntasFrecuentes.data?.map((preguntasFrecuentes: any) => (
        <div className="contenedor-accordion-interior">
          <div className="header-accordion" onClick={toggleAccordion}>
            <div className='superior-cerrado-abierto-icon'>
              <h3 className='titulo-accordion'>{preguntasFrecuentes.titulo}</h3>
              <div className='img-accordion'> {isOpen ? imgFalse : imgTrue} </div>
            </div>
          </div>
          {isOpen && (
            <div className="accordion-content">
              {preguntasFrecuentes.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>

  );
};

export default PreguntasFrecuentes