import { useEffect, useState } from "react"
import { CardsCombos, NavbarCombos, PantallaDescarga } from "../components/shared"
import { getPollo } from "../services"
import { TabTitle } from "../utils/GeneralFunctions"
import { PolloResponse } from "../interfaces"

const Pollo = () => {
    TabTitle("Conoce nuestro delicioso pollo | BEMBOS")

    const [listPollo, setListPollo] = useState<PolloResponse>({ dato: [] });
    useEffect(() => {
        const getListPollo = async () => {
            const data = await getPollo();
            return setListPollo(data);
        };

        getListPollo();
    }, []);

    useEffect(() => {
        if (listPollo.dato && listPollo.dato.length > 0) {
            console.log(listPollo.dato[0]);
        }
    }, [listPollo]);


    return (
        <div className="contenedor-general-combos">
            <NavbarCombos />




            <PantallaDescarga />


        </div>
    )
}
export default Pollo