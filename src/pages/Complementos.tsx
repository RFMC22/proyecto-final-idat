import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getComplementos } from "../services"
import { TabTitle } from "../utils/GeneralFunctions"

const Complementos = () => {
  TabTitle("Deléitate con nuestros complementos en BEMBOS: nuggets, papas, etc")

  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="CONOCE NUESTROS DELICIOSOS COMPLEMENTOS | BEMBOS"
        getData={getComplementos}
        variante={false}
        subtitulo=""
        encabezado="PREGUNTAS FRECUENTES SOBRE NUESTROS COMPLEMENTOS"
        descripcion="" />
      <PantallaDescarga />

    </div>
  )
}
export default Complementos