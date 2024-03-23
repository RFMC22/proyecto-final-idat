import { Link } from "react-router-dom"

import '../../styles/Card.css'
import { Complemento } from "../../interfaces/model/Complemento"

type BaseProps = Complemento;

const Card = (props: BaseProps) => {
  return (
    <div className="content-menu-card activesl">
      <div className="menu-card">
        <div className="menu-img menu-home-promociones-bembos-delivery">
          <img src={props.img} alt={`imagen ${props.id}`} />
        </div>
        <div className="menu-content">
          <Link to={props.link} className="menu-home-promociones-bembos-delivery">
            {props.nombre}
          </Link>
          {
            props.precio &&
            <div className="content-price">
              <p className="price price-center">S/. {props.precio.toFixed(2)}</p>
            </div>
          }
          <button className="menu-home-promociones-bembos-delivery">
            <Link to={props.link}>
              <p>Ver Todos</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card