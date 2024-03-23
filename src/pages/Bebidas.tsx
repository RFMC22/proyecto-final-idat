import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getBebidas } from "../services/fetchBebidas"
import { TabTitle } from "../utils/GeneralFunctions"

const Bebidas = () => {
  TabTitle("Prueba nuestras deliciosas bebidas | BEMBOS")

  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="BEBIDAS PARA REFRESCAR TU DIA | BEMBOS"
        getData={getBebidas}
        variante={true}
        subtitulo="HAMBURGUESAS A LA PARRILLA"
        descripcion="Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. Por ello, Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para otorgarle la jugosidad perfecta que nos caracteriza. Combina tu hamburguesa de carne a la parrilla con los mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho más. ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!"
        encabezado="PREGUNTAS FRECUENTES SOBRE NUESTRAS HAMBURGUESAS" />
      <PantallaDescarga />
    </div>
  )
}

export default Bebidas