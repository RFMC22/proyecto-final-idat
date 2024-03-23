import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getMenusAlPlato } from "../services/fetchMenusalplato"

const MenusAlPlato = () => {
  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="COMBOS DE HAMBURGESAS"
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