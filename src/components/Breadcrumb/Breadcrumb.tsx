import { Link, useLocation, useNavigate } from 'react-router-dom';
import './../../styles/Breadcrumb.css';
import { PathConstants } from '../../utils';

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationArray = location.pathname
    .trim()
    .replace('-', ' ')
    .replace('-', ' ')
    .replace('-', ' ')
    .split('/');

  return (
    <ul className="breadcrumb">
      <li>
        <Link to={PathConstants.INDEX}>Inicio</Link>
      </li>
      <span>{'>'}</span>
      <li>
        <Link
          to={'..'}
          onClick={(e) => {
            e.preventDefault();
            navigate(-2);
          }}
        >
          {locationArray[1]}
        </Link>
      </li>
      <span>{'>'}</span>
      <li>
        <Link
          to={'..'}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          {locationArray[2]}
        </Link>
      </li>
      <span>{'>'}</span>
      <li>
        <Link to="#">{locationArray[3]}</Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
