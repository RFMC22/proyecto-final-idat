import { Link } from "react-router-dom"
import { PathConstants } from "../../utils/PathConstants"
import { useEffect, useState } from "react"


const NavbarCombos = () => {
    const [isExpanded, setIsExpanded] = useState(true);

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

    return (
        <header className="contenedor-navegacion-combos">
            <nav className="navegacion-seccion-combos">
                <ul className={isExpanded ? '' : 'collapsed'}>
                    <Link to={PathConstants.COMBOS}><li><a>Combos</a></li></Link>
                    <Link to={PathConstants.HAMBURGUESAS}><li><a>Hamburguesas</a></li></Link>
                    <Link to={PathConstants.POLLO}><li><a>Pollo</a></li></Link>
                    <Link to={PathConstants.MENUSALPLATO}><li><a>Menús al PLato</a></li></Link>
                    <Link to={PathConstants.LONCHERITAS}><li><a>Loncheritas</a></li></Link>
                    <Link to={PathConstants.COMPLEMENTOS}><li><a>Complementos</a></li></Link>
                    <Link to={PathConstants.BEBIDAS}><li><a>Bebidas</a></li></Link>
                    <Link to={PathConstants.HELADOS}><li><a>Helados</a></li></Link>
                    <Link to={PathConstants.INKACHIPS}><li><a>inka chips</a></li></Link>
                </ul>
            </nav>
        </header>
    )
}


export default NavbarCombos