import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getHelados } from "../services/fetchHelados"

const Helados = () => {
  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="DELICIOSOS HELADOS PARA TI | BEMBOS"
        getData={getHelados}
        variante={false}
        subtitulo="POSTRES HELADOS"
        encabezado="PREGUNTAS FRECUENTES SOBRE NUESTROS HELADOS"
        descripcion="Cualquier momento es ideal para un postre helado. Conoce las variedades que tenemos en Bembos. Distintos sabores de helados, salsas y topping para que disfrutes. ¡Puedes elegir el tuyo, pedirlo online y recibirlo en tu hogar!" />
      <PantallaDescarga />

    </div>
  )
}

export default Helados