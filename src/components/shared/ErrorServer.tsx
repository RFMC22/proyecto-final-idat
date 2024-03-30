import './../../styles/Error.css';
import { VscError } from 'react-icons/vsc';
const ErrorServer = () => {
  return (
    <div className="server-error">
      <div className="message-error-container">
        <h1 className='error-title'>¡Ups! Parece que hay un problema</h1>
        <p>
          Lo sentimos, pero el servidor al que intentas acceder parece estar
          caído en este momento. Nuestro equipo técnico está trabajando para
          resolver este problema lo antes posible. Por favor, inténtalo de nuevo
          más tarde.
        </p>

        <VscError className='icon' />
      </div>
    </div>
  );
};

export default ErrorServer;
