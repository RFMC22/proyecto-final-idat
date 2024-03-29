import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FoodTypes, PathConstants } from '../../utils';

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
  );
};

export default NavbarCombos;
