import './../../styles/PantallaDescarga.css';
import googleplay from '../../../public/googleplay.svg'
import appstore from '../../../public/appstore.svg'
import appgallery from '../../../public/appgallery.svg'
import phone from '../../../public/phoneGlobo.webp'
import iconBembos from '../../../public/iconBembos.webp'

const PantallaDescarga = () => {
    return (
        <div className="contenedor-descarga">
            <div className="encabezado-descarga">
                <p className="titulo-descarga">Descarga nuestra <br /><strong>APP BEMBOS y accede <br />a nuevos beneficios</strong></p>
                <img src={iconBembos} />
            </div>
            <div className='contenedor-phone-text'>
                <img src={phone} className="imagen-celular" />
                <div className='contenedor-txt-descarga'>
                    <ul>
                        <li><div className="check">✔</div><p className="parrafo-descarga"><strong>Pide más rápido tu hamburguesa favorita </strong>para disfrutarla las veces que quieras.</p></li>
                        <li><div className="check">✔</div><p className="parrafo-descarga"><strong>Acumula puntos </strong>por cada compra y canjéalos por promociones exclusivas.</p></li>
                        <li><div className="check">✔</div><p className="parrafo-descarga"><strong>Sé el primero en recibir notificaciones </strong>y conoce nuestras promociones en hamburguesas y más.</p></li>
                    </ul>
                    <div className='contenedor-medios-descarga'>
                        <p className="descargar-aqui"><strong>Descárgalo aquí:</strong></p>
                        <div className="contendor-iconos-medio">
                            <img src={googleplay} />
                            <img src={appstore} />
                            <img src={appgallery} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PantallaDescarga