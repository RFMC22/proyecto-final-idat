import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FoodTypes, PathConstants } from '../../utils';
import iconCart from '../../assets/images/cartWhite.svg'

const NavbarCombos = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsExpanded(scrollTop < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <div className='nav-responsivo'>
      <header className="contenedor-navegacion-combos">
        <nav className="navegacion-seccion-combos">
          <ul className={isExpanded ? '' : 'collapsed'}>
            {Object.values(FoodTypes).map((foodType, index) => (
              <Link
                key={index}
                to={`${PathConstants.MENU}/${foodType.path}`}
                onClick={() => handleItemClick(index)}
              >
                <li
                  key={foodType.path}
                  className={index === selectedItem ? 'selec-amarillo' : ''}
                >
                  <a>{foodType.name}</a>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <div className='content-carrito'>
        <img src={iconCart} />
        <h4>Ver Carrito de Compra</h4>
        <p>S/. 63.7</p>
      </div>

    </div>
  );
};

export default NavbarCombos;
