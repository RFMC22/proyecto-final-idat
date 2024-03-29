import React, { useEffect, useState } from 'react';
import abierto from '../../../public/abierto.png';
import cerrado from '../../../public/cerrado.png';
import { getPreguntasFrecuentes } from '../../services';
import './../../styles/PreguntasFrecuentes.css';
import { useParams } from 'react-router-dom';
import { FoodTypes } from '../../utils';

interface AccordionSectionProps {
  myclass: string;
}

const PreguntasFrecuentes: React.FC<AccordionSectionProps> = ({ myclass }) => {
  const { type } = useParams();
  const [openSections, setOpenSections] = useState<boolean[]>([]);
  const [preguntasFrecuentes, setPreguntasFrecuentes] = useState<any[]>([]);

  const imgFalse = <img src={abierto} alt="" />;
  const imgTrue = <img src={cerrado} alt="" />;

  useEffect(() => {
    const fetchPreguntasFrecuentes = async () => {
      const data = await getPreguntasFrecuentes();
      if (data && data.data && data.data[0]) {
        let preguntas: any = [];
        switch (type) {
          case FoodTypes.HAMBURGUESAS.path:
            preguntas = data.data[0].hamburguesas;
            break;
          case FoodTypes.POLLOS.path:
            preguntas = data.data[0].pollo;
            break;
          case FoodTypes.LONCHERITAS.path:
            preguntas = data.data[0].loncheritas;
            break;
          case FoodTypes.COMPLEMENTOS.path:
            preguntas = data.data[0].complementos;
            break;
          case FoodTypes.HELADOS.path:
            preguntas = data.data[0].helados;
            break;
          default:
            break;
        }
        setPreguntasFrecuentes(preguntas);
        setOpenSections(new Array(preguntas.length).fill(false));
      }
    };

    fetchPreguntasFrecuentes();
  }, [type]);

  const toggleAccordion = (index: number) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <div className={`contendor-principal-accordion ${myclass}`}>
      {preguntasFrecuentes.map((pregunta: any, index: number) => (
        <div className="contenedor-accordion-interior" key={index}>
          <div
            className="header-accordion"
            onClick={() => toggleAccordion(index)}
          >
            <div className="superior-cerrado-abierto-icon">
              <h3 className="titulo-accordion">{pregunta.titulo}</h3>
              <div className="img-accordion">
                {openSections[index] ? imgFalse : imgTrue}
              </div>
            </div>
          </div>
          {openSections[index] && (
            <div className="accordion-content">{pregunta.respuesta}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
