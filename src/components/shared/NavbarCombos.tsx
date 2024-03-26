import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FoodTypes, PathConstants } from "../../utils";


const NavbarCombos = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        //TODO: agregar en generalFunctions
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsExpanded(scrollTop < 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="contenedor-navegacion-combos">
            <nav className="navegacion-seccion-combos">
                <ul className={isExpanded ? '' : 'collapsed'}>
                    {Object.values(FoodTypes).map(foodType => (
                        <Link 
                            key={foodType.path}
                            to={`${PathConstants.MENU}/${foodType.path}`}
                        > <li> <a> {foodType.name} </a> </li> </Link>
                    ))}
                </ul>
            </nav>
        </header>
    )
}


export default NavbarCombos