import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getInkaChips } from "../services/fetchInkaChips"
import { TabTitle } from "../utils/GeneralFunctions"

const InkaChips = () => {
  TabTitle("Conoce nuestras deliciosas Inka Chips | BEMBOS")

  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="DESCUBRE NUESTRAS DELICOSAS INKA CHIPS | BEMBOS"
        getData={getInkaChips}
        variante={false}
        subtitulo=""
        encabezado=""
        descripcion="" />
      <PantallaDescarga />

    </div>
  )
}

export default InkaChips