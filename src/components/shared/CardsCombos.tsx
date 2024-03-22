import React, { useEffect, useState } from "react";
import { ComboResponse } from "../../interfaces";


interface Props {
    tituloSeccion: string;
    getData: () => Promise<ComboResponse>;
}

const CardsCombos: React.FC<Props> = ({ tituloSeccion, getData }) => {
    const [combos, setCombos] = useState<ComboResponse>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataCombos = await getData();
                setCombos(dataCombos);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [getData]);


    return (
        <div className="max-contenedor">
            <div className="contenedor-fondo-medio">
                <div className="contenedor-combos-contenido">
                    <h2>{tituloSeccion}</h2>
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
    )
}

export default CardsCombos