import { getCombos } from "../services/fetchCombos";
import '../styles/pages/Combos.css';
import { NavbarCombos, PantallaDescarga } from "../components/shared";
import CardsCombos from "../components/shared/CardsCombos";


const Combos = () => {

    return (
        <div className="contenedor-general-combos">
            <NavbarCombos />
            <CardsCombos tituloSeccion="COMBOS DE HAMBURGESAS" getData={getCombos} variante={false} subtitulo="" encabezado="" descripcion="" />
            <PantallaDescarga />

        </div>
    )
}

export default Combos
