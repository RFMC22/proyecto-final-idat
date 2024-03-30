import { BsShop } from "react-icons/bs";
import '../styles/pages/Recojo.css'
import useShopping from "../hooks/useShopping";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { PathConstants } from "../utils";

const Recojo = () => {
  const {getDataLocales, locales, setLocalStorage, getLocalStorage} = useShopping();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  

  useEffect(()=>{
    getDataLocales()
  },[]);

  const handleRecogerClick = (distrito, sede) => {
    Swal.fire({
      title: '<p class="popup-title">Pedido con recojo en tienda</p>',
      html: `
        <p class="distrito">${distrito}</p>
        <p class="sede">${sede}</p>
        <p class="tiempo">Tiempo de recojo: <span>Dentro de 20 minutos</span> </p>
      `,
      confirmButtonText: 'CONFIRMAR',
      confirmButtonColor: 'rgb(33,56,139)',
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: 'CANCELAR',
      allowOutsideClick: false,
      customClass: {
        cancelButton: 'cancel-btn-recojo',
        popup: 'popup-recojo',
        title: 'title-recojo',
        closeButton: 'close-recojo'
      }
    }).then(result => {
      if (result.isConfirmed) {
        const tempSelectLocal = {
          distrito,
          sede
        };
        setLocalStorage(tempSelectLocal);    
        navigate(PathConstants.PROMOCIONES_DELIVERY)
        getLocalStorage()
      }else {
        console.log(result);
      }
    });
  };
  
  return (
    <section>
      <div className="container">
        <div className="recojo">
          <p className="title">Selecciona tu forma de entrega</p>
          <div className="r-content">
            <button className="b">
              <BsShop/>
              <br />
              Recojo en Tienda
            </button>
            <div className="input">
              <input type="text" placeholder="Ingrese una dirección" value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}/>
            </div>
            <div className="content-sedes">
              {locales.data &&
                locales.data[0].distritos.map(distrito => (
                  <>
                    {distrito.sedes.some(sede =>
                      sede.toLowerCase().includes(searchTerm.toLowerCase())
                    ) || distrito.nombre_distrito.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                      distrito.sedes.map((sede, index) => (
                        <div key={index} className="sedes">
                          <p className="te">{distrito.nombre_distrito}</p>
                          <p className="st"> {sede} </p>
                          <button onClick={() => handleRecogerClick(distrito.nombre_distrito, sede)}>Recoger Aquí</button>
                        </div>
                      ))
                    ) : null}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recojo