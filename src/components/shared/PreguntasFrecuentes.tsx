import './../../styles/PreguntasFrecuentes.css';
import React, { useState } from 'react';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  myclass: string;
}

const PreguntasFrecuentes: React.FC<AccordionSectionProps> = ({
  title,
  children,
  myclass,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const imgFalse = <img src="../../../public/abierto.png" alt="" />;
  const imgTrue = <img src="../../../public/cerrado.png" alt="" />;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`contendor-principal-accordion ${myclass}`}>
      <div className="contenedor-accordion-interior">
        <div className="header-accordion" onClick={toggleAccordion}>
          <div className="superior-cerrado-abierto-icon">
            <h3 className="titulo-accordion">{title}</h3>
            <div className="img-accordion"> {isOpen ? imgFalse : imgTrue} </div>
          </div>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
