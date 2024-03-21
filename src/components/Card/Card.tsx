import { Link } from "react-router-dom"
import { MenuProps } from "../../interfaces"

import '../../styles/Card.css'

const Card = ({nombre, img, link, id}:MenuProps) => {
  return (
    <div className="content-menu-card activesl">
      <div className="menu-card">
        <div className="menu-img menu-home-promociones-bembos-delivery">
          <img src={img} alt={`imagen ${id}`} />
        </div>
        <div className="menu-content">
          <Link to={link} className="menu-home-promociones-bembos-delivery">
            {nombre}
          </Link>
          <button className="menu-home-promociones-bembos-delivery">
            <Link to={link}>
              <p>Ver Todos</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card