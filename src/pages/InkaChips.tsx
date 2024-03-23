import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getInkaChips } from "../services/fetchInkaChips"

const InkaChips = () => {
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