import '../styles/Checkout.css'
import iconMas from '../../public/mas.svg'
import iconLapiz from '../../public/iconLapiz.svg'
import iconPerfil from '../../public/iconPerfil.svg'
import iconMail from '../../public/iconMail.svg'
import iconPhone from '../../public/iconPhone.svg'
import iconDni from '../../public/iconDni.svg'
import incognita from '../../public/icognita.svg'
import amexTarjeta from '../../public/amexTarjeta.svg'
import visaTarjeta from '../../public/visaTarjeta.svg'
import yape from '../../public/yape.svg'
import { useForm } from 'react-hook-form'
import useShopping from '../hooks/useShopping'

const Checkout = () => {
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm()
    const selectedPaymentMethod = watch('metodoPago');
    const { shopingList } = useShopping()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    console.log(shopingList)
    return (
        <div className='contenedor-maximo'>
            <section className='checkout-separacion'>
                <h2 className='title-checkout'>CHECKOUT</h2>
                <div className='contenido-checkout contenedor-body'>
                    <p>Formas de entrega:<span> Recojo</span></p>
                    <p>Tienda para tu pedido:</p>

                    <div className='ubicacion-tienda'>
                        <img src={iconMas} className='iconMas' />
                        <p className='text-direccion'
                        >Aurora - Av. Benavides N° 1821</p>
                        <img src={iconLapiz} className='iconLapiz' />
                    </div>
                    <form onSubmit={onSubmit} className='formulario-checkout'>
                        <p>Datos personales:</p>
                        <div className='input-contendor-twoo'>
                            <div className='contenedor-error'>
                                <div className={`item-input ${errors.name ? 'error' : ''}`}>
                                    {/* Nombre */}
                                    <img src={iconPerfil} />
                                    <input type="text" placeholder='Nombre*'
                                        {...register('name', {
                                            required: true,

                                        })}
                                    />
                                </div>
                                {
                                    errors.name && <h5 className='mensaje-error'>Este es un campo requerido.</h5>
                                }
                            </div>

                            <div className='contenedor-error'>
                                <div className={`item-input ${errors.lastname ? 'error' : ''}`}>
                                    {/* Apellido */}
                                    <img src={iconPerfil} />
                                    <input type="text" placeholder='Apellido*'
                                        {...register('lastname', {
                                            required: true,

                                        })}

                                    />
                                </div>
                                {
                                    errors.lastname && <h5 className='mensaje-error'>Este es un campo requerido.</h5>
                                }
                            </div>
                        </div>

                        <div className='input-contendor-twoo'>
                            <div className='contenedor-error'>
                                <div className={`item-input ${errors.typeDocument ? 'error' : ''}`}>
                                    {/* Documentacion */}
                                    <img src={iconDni} />
                                    <select id="typeDocument"
                                        {...register('typeDocument', {
                                            required: true,

                                        })}
                                    >
                                        <option value="tipo">Tipo de documento</option>
                                        <option value="dni">DNI</option>
                                        <option value="carnet">Carnet de extranjería</option>
                                        <option value="pasaporte">Pasaporte</option>
                                    </select>
                                </div>
                                {
                                    errors.typeDocument && <h5 className='mensaje-error'>Este es un campo requerido.</h5>
                                }
                            </div>
                            <div className='contenedor-error'>
                                <div className={`item-input ${errors.numberDocument ? 'error' : ''}`}>
                                    {/* N° de documento */}
                                    <img src={iconDni} />
                                    <input type="number" placeholder='Nro. de documento*'
                                        {...register('numberDocument', {
                                            required: true,

                                        })}
                                    />
                                </div>
                                {
                                    errors.numberDocument && <h5 className='mensaje-error'>Este es un campo requerido.</h5>
                                }

                            </div>
                        </div>

                        <div className='input-contendor-twoo'>
                            <div className='contenedor-error'>
                                <div className={`item-input ${errors.email ? 'error' : ''}`}>
                                    {/* Correo */}
                                    <img src={iconMail} />
                                    <input type="email" placeholder='Correo*'
                                        {...register('email', {
                                            required: true,

                                        })}
                                    />
                                </div>
                                {
                                    errors.email && <h5 className='mensaje-error'>Este es un campo requerido.</h5>
                                }
                            </div>
                            <div className='contenedor-error'>
                                <div className={`item-input ${errors.phoneNumber ? 'error' : ''}`}>
                                    {/* N° celular */}
                                    <img src={iconPhone} />
                                    <input type="tel" placeholder='Celular*'
                                        {...register('phoneNumber', {
                                            required: true,

                                        })}
                                    />
                                </div>
                                {
                                    errors.phoneNumber && <h5 className='mensaje-error'>Este es un campo requerido.</h5>
                                }
                            </div>
                        </div>

                        <div className='seccion-pago-final'>
                            <p>Selecionar método de pago</p>
                            <div className='contenedor-metodos-pagos'>
                                <h4>Pago online</h4>
                                <div className='item-metodos'>
                                    <li className='metodo-tipo-incognita'><img src={incognita} /></li>
                                    <button className={`metodo-tipo ${selectedPaymentMethod === 'visa' ? 'selected' : ''}`} type="button" onClick={() => setValue('paymentMethod', 'visa')}><img src={visaTarjeta} /></button>
                                    <button className={`metodo-tipo ${selectedPaymentMethod === 'yape' ? 'selected' : ''}`} type="button" onClick={() => setValue('paymentMethod', 'yape')}><img src={yape} /></button>
                                    <button className={`metodo-tipo ${selectedPaymentMethod === 'amex' ? 'selected' : ''}`} type="button" onClick={() => setValue('paymentMethod', 'amex')}><img src={amexTarjeta} /></button>
                                </div>
                            </div>
                            <p>Tipo de comprobante</p>
                            <div className='contenedor-comprobantes'>
                                <div className='item-compro'>
                                    <input type="checkbox" id='simple'
                                        {...register('simpleTicket')}
                                    />
                                    <label htmlFor="simple">Boleta Simple</label>
                                </div>
                                <div className='item-compro'>
                                    <input type="checkbox" id='conDni'
                                        {...register('ticketWithID')}
                                    />
                                    <label htmlFor="conDni">Boleta con DNI</label>
                                </div>

                            </div>
                            <div className='terms'>
                                <div className='terms-item'>
                                    <input type="checkbox" id='promociones-term'
                                        {...register('promotionalTerms')}
                                    />
                                    <label htmlFor="promociones-term">Acepto recibir <a> promociones y novedades.</a></label>
                                </div>
                                <div className='terms-item'>
                                    <input type="checkbox" id='datos-term'
                                        {...register('dataTransferTerms')}
                                    />
                                    <label htmlFor="datos-term">Acepto recibir la transferencia de <a > datos a empresas asociadas.</a></label>
                                </div>

                                <div className='terms-item'>

                                    <input type="checkbox" id='privacidad-term'
                                        {...register('privacyTerms')}
                                    />
                                    <label htmlFor="privacidad-term">Acepto los <a> términos y condiciones y política de privacidad de datos personales.</a></label>
                                </div>

                            </div>
                        </div>
                        <button type='submit' className='btn-finalizado'><span className='circle-one'>1</span>finalizar compra <span className='price-checkout'>S/. 32.80</span></button>
                    </form>
                </div>
            </section>
            <aside className='checkout-separacion'>
                <h2 className='title-checkout'>DETALLE DE PEDIDO</h2>
                <div className='contenedor-detalle contenedor-body'>
                    <div className='detalle-item'>
                        <div className='contenedor-img'>
                            <img src="" />
                        </div>
                        <div className='contenedor-txt'>
                            <p className='nombre-pedido'>1 x Combo Extrema</p>
                            <p className='precio-detalle'>S/. 32.80</p>
                            <a href="">Ver detalle</a>
                        </div>
                    </div>
                    <div className='detalle-item'>
                        <div className='contenedor-img'>
                            <img src="" />
                        </div>
                        <div className='contenedor-txt'>
                            <p className='nombre-pedido'>1 x Combo Extrema</p>
                            <p className='precio-detalle'>S/. 32.80</p>
                            <a href="">Ver detalle</a>
                        </div>
                    </div>
                    <div className='detalle-item'>
                        <div className='contenedor-img'>
                            <img src="" />
                        </div>
                        <div className='contenedor-txt'>
                            <p className='nombre-pedido'>1 x Combo Extrema</p>
                            <p className='precio-detalle'>S/. 32.80</p>
                            <a href="">Ver detalle</a>
                        </div>
                    </div>
                    <div className='detalle-item'>
                        <div className='contenedor-img'>
                            <img src="" />
                        </div>
                        <div className='contenedor-txt'>
                            <p className='nombre-pedido'>1 x Combo Extrema</p>
                            <p className='precio-detalle'>S/. 32.80</p>
                            <a href="">Ver detalle</a>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Checkout