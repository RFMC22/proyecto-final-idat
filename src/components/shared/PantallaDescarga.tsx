import './../../styles/PantallaDescarga.css';

const PantallaDescarga = () => {
    return (
        <div className="contenedor-descarga">
            <div className="encabezado-descarga">
                <p className="titulo-descarga">Descarga nuestra <br /><strong>APP BEMBOS y accede <br />a nuevos beneficios</strong></p>
                <img src="../../../public/iconBembos.webp" alt="" />
            </div>
            <div className='contenedor-phone-text'>
                <img src="../../../public/phoneGlobo.webp" className="imagen-celular" />
                <div className='contenedor-txt-descarga'>
                    <ul>
                        <li><div className="check">✔</div><p className="parrafo-descarga"><strong>Pide más rápido tu hamburguesa favorita </strong>para disfrutarla las veces que quieras.</p></li>
                        <li><div className="check">✔</div><p className="parrafo-descarga"><strong>Acumula puntos </strong>por cada compra y canjéalos por promociones exclusivas.</p></li>
                        <li><div className="check">✔</div><p className="parrafo-descarga"><strong>Sé el primero en recibir notificaciones </strong>y conoce nuestras promociones en hamburguesas y más.</p></li>
                    </ul>
                    <div className='contenedor-medios-descarga'>
                        <p className="descargar-aqui"><strong>Descárgalo aquí:</strong></p>
                        <div className="contendor-iconos-medio">
                            <img src="../../../public/googleplay.svg" />
                            <img src="../../../public/appstore.svg" />
                            <img src="../../../public/appgallery.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PantallaDescarga