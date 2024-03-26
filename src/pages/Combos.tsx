import { getCombos } from "../services/fetchCombos";
import '../styles/pages/Combos.css';
import { NavbarCombos, PantallaDescarga } from "../components/shared";
import CardsCombos from "../components/shared/CardsCombos";
import { TabTitle } from "../utils/GeneralFunctions";
import { useParams } from "react-router-dom";
import { FoodTypes } from "../utils";
import { getHamburguesas, getPollo } from "../services";


const Combos = () => {
    const {type} = useParams();
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
            
            break;
        case FoodTypes.LONCHERITAS.path:
            
            break;
        case FoodTypes.COMPLEMENTOS.path:
            
            break;
        case FoodTypes.BEBIDAS.path:
            
            break;
        case FoodTypes.HELADOS.path:
            
            break;
        case FoodTypes.INKA_CHIPS.path:
            
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
