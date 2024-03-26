import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getMenusAlPlato } from "../services/fetchMenusalplato"
import { TabTitle } from "../utils/GeneralFunctions"

const MenusAlPlato = () => {
  TabTitle("Conoce nuestra carta de MENÚ AL PLATO")

  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="CONOCE NUESTROS MENÚ AL PLATO | BEMBOS"
        getData={getMenusAlPlato}
        variante={false}
        subtitulo=""
        encabezado=""
        descripcion="" />
      <PantallaDescarga />

    </div>
  )
}

export default MenusAlPlato