import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getPollo } from "../services/fetchPollo"

const Pollo = () => {
    return (
        <div className="contenedor-general-combos">
            <NavbarCombos />
            <CardsCombos
                tituloSeccion="COMBOS DE HAMBURGESAS"
                getData={getPollo}
                variante={true}
                subtitulo="SÁNDWICHES Y HAMBURGUESAS DE POLLO"
                descripcion="En Bembos no solamente tenemos hamburguesas de carne, también tenemos hamburguesas y sándwiches de pollo broaster y grill. Tenemos las mejores combinaciones de ingredientes que hacen que nuestras hamburguesas tengan un sabor irresistible. Pídelas por delivery web y empieza a disfrutar de lo mejor en hamburguesas y sándwiches de Bembos."
                encabezado="PREGUNTAS FRECUENTES SOBRE NUESTROS SANDWICHES DE POLLO" />
            <PantallaDescarga />


        </div>
    )
}
export default Pollo