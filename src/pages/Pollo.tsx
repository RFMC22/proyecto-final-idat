import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getPollo } from "../services"
import { TabTitle } from "../utils/GeneralFunctions"

const Pollo = () => {
    TabTitle("Conoce nuestro delicioso pollo | BEMBOS")
  
    return (
        <div className="contenedor-general-combos">
            <NavbarCombos />
            <CardsCombos
                subtitulo=""
                descripcion=""
                encabezado=""
                variante={false}
                tituloSeccion=""
                getData={getPollo}
            />

            <PantallaDescarga />


        </div>
    )
}
export default Pollo