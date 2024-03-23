import React, { useState } from 'react';
import { GoChevronUp } from 'react-icons/go';
import { GoChevronDown } from 'react-icons/go';
import './../../styles/Accordion.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className: string;
  id: number;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${className}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="left-title">
          <div className="circle">{id}</div>
          <h3 className="title">{title}</h3>
        </div>

        <span>
          {isOpen ? (
            <GoChevronUp className="icon" />
          ) : (
            <GoChevronDown className="icon" />
          )}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
