import { useEffect, useState } from "react"
import { ComboResponse } from "../interfaces";
import { getCombos } from "../services/fetchCombos";
import '../styles/pages/Combos.css';
import { PathConstants } from "../utils/PathConstants";
import { Link } from "react-router-dom";


const Combos = () => {
    const [combos, setCombos] = useState<ComboResponse>({});
    const [isExpanded, setIsExpanded] = useState(true);
    useEffect(() => {
        const getDataCombos = async () => {
            const dataCombos = await getCombos()
            setCombos(dataCombos)
        }
        getDataCombos()
    }, [])



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
        <div className="contenedor-general-combos">

            <header className="contenedor-navegacion-combos">

                <nav className="navegacion-seccion-combos">
                    <ul className={isExpanded ? '' : 'collapsed'}>
                        <li><Link to={PathConstants.COMBOS}>Combos</Link></li>
                        <li><a href="#">Hamburguesas</a></li>
                        <li><a href="#">Pollo</a></li>
                        <li><a href="#">Menú al Plato</a></li>
                        <li><a href="#">Loncheritas</a></li>
                        <li><a href="#">Complementos</a></li>
                        <li><a href="#">Bebida</a>s</li>
                        <li><a href="#">Helados</a></li>
                        <li><a href="#">Inka Chips</a></li>
                    </ul>
                </nav>
            </header>
            <div className="max-contenedor">
                <div className="contenedor-fondo-medio">
                    <div className="contenedor-combos-contenido">
                        <h2>COMBOS DE HAMBURGUESAS</h2>
                        <div className="contenedor-lista-combos">
                            <div className="lista-combos">
                                {
                                    combos.data?.map(combo => (
                                        <div className="item-lista">
                                            <div className="item-content">
                                                <div className="item-card">
                                                    <picture className="card-img">
                                                        <img src={combo.img} alt="" />
                                                    </picture>
                                                    <div className="card-cotent-item">
                                                        <a href="#" className="card-nombre-producto"><h4 >{combo.nombre}</h4></a>
                                                        <p className="card-precio">S/. {combo.precio}</p>
                                                        <a href="" className="card-termino-condiciones">Términos y condiciones</a>
                                                        <button className="btn-ver-mas">Ver más</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Combos