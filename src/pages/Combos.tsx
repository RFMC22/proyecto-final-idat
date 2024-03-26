import { getCombos } from "../services/fetchCombos";
import '../styles/pages/Combos.css';
import { NavbarCombos, PantallaDescarga } from "../components/shared";
import CardsCombos from "../components/shared/CardsCombos";
import { TabTitle } from "../utils/GeneralFunctions";


const Combos = () => {
    TabTitle("Combos irresistibles en BEMBOS !Ordénalos ahora!")
    return (
        <div className="contenedor-general-combos">
            <NavbarCombos />
            <CardsCombos tituloSeccion="CONOCE NUESTROS COMBOS | BEMBOS" getData={getCombos} variante={false} subtitulo="" encabezado="" descripcion="" />
            <PantallaDescarga />

        </div>
    )
}

export default Combos
