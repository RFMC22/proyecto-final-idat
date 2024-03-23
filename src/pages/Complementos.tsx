import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getComplementos } from "../services"

const Complementos = () => {
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