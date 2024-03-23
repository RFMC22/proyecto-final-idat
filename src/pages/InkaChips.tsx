import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getInkaChips } from "../services/fetchInkaChips"

const InkaChips = () => {
  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="COMBOS DE HAMBURGESAS"
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