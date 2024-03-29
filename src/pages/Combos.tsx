import { getCombos } from "../services/fetchCombos";
import '../styles/pages/Combos.css';
import { NavbarCombos, PantallaDescarga } from "../components/shared";
import CardsCombos from "../components/shared/CardsCombos";
import { TabTitle } from "../utils/GeneralFunctions";
import { useParams } from "react-router-dom";
import { FoodTypes } from "../utils";
import { getBebidas, getComplementos, getHamburguesas, getHelados, getInkaChips, getLoncheritas, getPollo } from "../services";
import { getMenusAlPlato } from "../services/fetchMenusalplato";


const Combos = () => {
    const { type } = useParams();
    let combosConfig = {};

    switch (type) {
        case FoodTypes.COMBOS.path:
            TabTitle("Combos irresistibles en BEMBOS !Ordénalos ahora!");
            combosConfig = {
                tituloSeccion: "CONOCE NUESTROS COMBOS | BEMBOS",
                getData: getCombos,
                variante: false,
                subtitulo: "",
                descripcion: "",
                encabezado: ""
            }
            
            break;
        case FoodTypes.HAMBURGUESAS.path:
            TabTitle("Disfruta de nuestro delicioso menú de Hamburguesas")
            combosConfig = {
                tituloSeccion: "CONOCE NUESTRAS IRRESISTIBLES HAMBURGUESAS | BEMBOS",
                getData: getHamburguesas,
                variante: true,
                subtitulo: "HAMBURGUESAS A LA PARRILLA",
                descripcion: "Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. Por ello, Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para otorgarle la jugosidad perfecta que nos caracteriza. Combina tu hamburguesa de carne a la parrilla con los mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho más. ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!",
                encabezado: "PREGUNTAS FRECUENTES SOBRE NUESTRAS HAMBURGUESAS"

            }
            break;
        case FoodTypes.POLLOS.path:
            TabTitle("Conoce nuestro delicioso pollo | BEMBOS")
            combosConfig = {
                tituloSeccion: "DESCUBRE NUESTRO IRRESISTIBLE MENÚ DE POLLO | BEMBOS",
                getData: getPollo,
                variante: true,
                subtitulo: "SÁNDWICHES Y HAMBURGUESAS DE POLLO",
                descripcion: "En Bembos no solamente tenemos hamburguesas de carne, también tenemos hamburguesas y sándwiches de pollo broaster y grill. Tenemos las mejores combinaciones de ingredientes que hacen que nuestras hamburguesas tengan un sabor irresistible. Pídelas por delivery web y empieza a disfrutar de lo mejor en hamburguesas y sándwiches de Bembos.",
                encabezado: "PREGUNTAS FRECUENTES SOBRE NUESTROS SANDWICHES DE POLLO"
            }
            break;
        case FoodTypes.AL_PLATO.path:
            TabTitle("CONOCE NUESTROS MENÚ AL PLATO | BEMBOS")
            combosConfig = {
                tituloSeccion: "CONOCE NUESTROS MENÚ AL PLATO | BEMBOS",
                getData: getMenusAlPlato,
                variante: false,
                subtitulo: "",
                descripcion: "",
                encabezado: ""

            }

            break;
        case FoodTypes.LONCHERITAS.path:
            TabTitle("Descubre las loncheras | BEMBOS")
            combosConfig = {
                tituloSeccion: "DESCUBRE NUESTRAS LONCHERAS | BEMBOS",
                getData: getLoncheritas,
                variante: true,
                subtitulo: "LONCHERITAS DE BEMBOS",
                descripcion: "Las loncheritas infantiles son una opción ideal para los más chicos. Puedes pedir tu loncherita Bembos con hamburguesa o nuggets, y te incluye papas fritas y bebida.",
                encabezado: "PREGUNTAS FRECUENTES SOBRE LAS LONCHERITAS"

            }

            break;
        case FoodTypes.COMPLEMENTOS.path:
            TabTitle("Deléitate con nuestros complementos en BEMBOS: nuggets, papas, etec.")
            combosConfig = {
                tituloSeccion: "CONOCE NUESTROS DELICIOSOS COMPLEMENTOS | BEMBOS",
                getData: getComplementos,
                variante: true,
                subtitulo: "  ",
                descripcion: "  ",
                encabezado: "PREGUNTAS FRECUENTES SOBRE NUESTROS COMPLEMENTOS"

            }

            break;
        case FoodTypes.BEBIDAS.path:
            TabTitle("Prueba nuetsra deliciosas bebidas | BEMBOS")
            combosConfig = {
                tituloSeccion: "BEBIDAS PARA REFRESCAR TU DIA | BEMBOS",
                getData: getBebidas,
                variante: false,
                subtitulo: "",
                descripcion: "",
                encabezado: ""

            }
            break;
        case FoodTypes.HELADOS.path:
            TabTitle("Prueba nuestros deliciosos helados | BEMBOS")
            combosConfig = {
                tituloSeccion: "DELICIOSOS HELADOS PARA TI | BEMBOS",
                getData: getHelados,
                variante: true,
                subtitulo: "POSTRES HELADOS",
                descripcion: "Cualquier momento es ideal para un postre helado. Conoce las variedades que tenemos en Bembos. Distintos sabores de helados, salsas y topping para que disfrutes. ¡Puedes elegir el tuyo, pedirlo online y recibirlo en tu hogar!",
                encabezado: "PREGUNTAS FRECUENTES SOBRE NUESTROS HELADOS"

            }
            break;
        case FoodTypes.INKA_CHIPS.path:
            TabTitle("DESCUBRE NUESTRAS DELICOSAS INKA CHIPS | BEMBOS")
            combosConfig = {
                tituloSeccion: "DESCUBRE NUESTRAS DELICOSAS INKA CHIPS | BEMBOS",
                getData: getInkaChips,
                variante: false,
                subtitulo: "",
                descripcion: "",
                encabezado: ""
            }
            break;
        default:
            break;
    }

    return (
        <div className="contenedor-general-combos">
            <NavbarCombos />
            <CardsCombos config={combosConfig} />
            <PantallaDescarga />
        </div>
    )
}

export default Combos
