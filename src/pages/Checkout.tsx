import React from 'react'
import iconMas from '../../public/mas.svg'
import iconLapiz from '../../public/iconLapiz.svg'
const Checkout = () => {
    return (
        <div>
            <section>
                <h2>CHECKOUT</h2>
                <div className='contenido-checkout'>
                    <p>Formas de entrega:<span> Recojo</span></p>
                    <p>Tienda para tu pedido:</p>

                    <div className='ubicacion-tienda'>
                        <img src={iconMas} className='iconMas' />
                        <p className='text-direccion'>Aurora - Av. Benavides N° 1821</p>
                        <img src={iconLapiz} className='iconLapiz' />
                    </div>
                    <form action="">
                        <p>Datos personales:</p>
                        <div className='input-contendor-twoo'>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className='input-contendor-twoo'>
                            <select id="tipoDocumento">
                                <option value="tipo">Tipo de documento</option>
                                <option value="dni">DNI</option>
                                <option value="carnet">Carnet de extranjería</option>
                                <option value="pasaporte">Pasaporte</option>
                            </select>
                            <input type="number" />
                        </div>
                        <div className='input-contendor-twoo'>
                            <input type="email" />
                            <input type="tel" />
                        </div>
                    </form>
                </div>
            </section>
            <aside>

            </aside>
        </div>
    )
}

export default Checkout