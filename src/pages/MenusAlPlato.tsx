import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"

const MenusAlPlato = () => {
  return (
    <div className="contenedor-general-combos">
      <NavbarCombos />
      <CardsCombos
        tituloSeccion="COMBOS DE HAMBURGESAS"
        getData={getCombos}
        variante={false}
        subtitulo=""
        encabezado=""
        descripcion="" />
      <PantallaDescarga />

    </div>
  )
}

export default MenusAlPlato