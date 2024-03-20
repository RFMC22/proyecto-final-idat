import { useEffect, useState } from "react"
import { ComboResponse } from "../interfaces";
import { getCombos } from "../services/fetchCombos";
import '../styles/pages/Combos.css';
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
            {/* {
                combos.data?.map(combo => (
                    <div>{combo.nombre}</div>
                ))
            } */}

            <header className="contenedor-navegacion-combos">

                <nav className="navegacion-seccion-combos">
                    <ul className={isExpanded ? 'expanded' : 'collapsed'}>
                        <li><a href="#">Combos</a></li>
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

            <div className="contenedor-fondo-medio">
                <div className="contenedor-combos-contenido">
                    <h2>COMBOS DE HAMBURGUESAS</h2>
                    <div className="contenedor-lista-combos">
                        <div className="lista-combos">
                            <div className="item-lista">
                                <div className="item-content">
                                    <div className="item-card">
                                        asdsadsda
                                    </div>
                                </div>
                            </div>
                            <div className="item-lista">
                                <div className="item-content">
                                    <div className="item-card">
                                        asdsadsda
                                    </div>
                                </div>
                            </div>
                            <div className="item-lista">
                                <div className="item-content">
                                    <div className="item-card">
                                        asdsadsda
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Combos