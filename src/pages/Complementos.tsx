import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"

const Complementos = () => {
  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="COMBOS DE HAMBURGESAS"
        getData={getCombos}
        variante={false}
        subtitulo=""
        encabezado="PREGUNTAS FRECUENTES SOBRE NUESTROS COMPLEMENTOS"
        descripcion="" />
      <PantallaDescarga />

    </div>
  )
}
export default Complementos