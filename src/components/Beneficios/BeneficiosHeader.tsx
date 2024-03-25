import { BeneficiosHeaderProps } from '../../interfaces';

const BeneficiosHeader = ({ img, title, subtitle, reason}:BeneficiosHeaderProps) => {
  return (
    <div className="beneficios-menu-header">
      <div className="left">
        <div className="circle">
          <img src={img} alt="friendzone-icon" />
        </div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="right">
        <p>{reason}</p>
      </div>
    </div>
  );
};

export default BeneficiosHeader;
