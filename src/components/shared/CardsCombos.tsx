import React, { useEffect, useState } from "react";
import { ComboResponse } from "../../interfaces";
import PreguntasFrecuentes from "./PreguntasFrecuentes";
import '../../styles/CardCombos.css'


interface Props {
    tituloSeccion: string;
    subtitulo: string;
    descripcion: string;
    encabezado: string;
    getData: () => Promise<ComboResponse>;
    variante: boolean;
}

const CardsCombos: React.FC<Props> = ({ tituloSeccion, getData, variante, subtitulo, descripcion, encabezado }) => {
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
                {

                }
                {
                    variante &&
                    <div>
                        <div className="encabezado-pregutnas-frecuentes">
                            <h2 className="titulo-categoria-preguntas">{subtitulo}</h2>
                            <p className="descripcion-seccion-preguntas">{descripcion}</p>
                            <h2 className="titulo-preguntas-ultimo">{encabezado}</h2>
                        </div>
                        <PreguntasFrecuentes title="¿Cuántos puntos recibo por comprar una hamburguesa online delivery?" children="Los puntos que se reciben por la compra de algún producto de nuestra carta de hamburguesas varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web." />
                    </div>
                }
            </div>
        </div>
    )
}

export default CardsCombos