import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getLoncheritas } from "../services/fetchLoncheritas"

const Loncheritas = () => {
  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="DESCUBRE NUESTRAS LONCHERAS | BEMBOS"
        getData={getLoncheritas}
        variante={false}
        subtitulo="LONCHERITAS DE BEMBOS"
        encabezado="PREGUNTAS FRECUENTES SOBRE LAS LONCHERITAS"
        descripcion="Las loncheritas infantiles son una opción ideal para los más chicos. Puedes pedir tu loncherita Bembos con hamburguesa o nuggets, y te incluye papas fritas y bebida." />
      <PantallaDescarga />

    </div>
  )
}

export default Loncheritas