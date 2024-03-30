import '../styles/Checkout.css'
import iconMas from '../../public/mas.svg'
import iconLapiz from '../../public/iconLapiz.svg'
import iconPerfil from '../../public/iconPerfil.svg'
import iconMail from '../../public/iconMail.svg'
import iconPhone from '../../public/iconPhone.svg'
import iconDni from '../../public/iconDni.svg'
import incognita from '../../public/icognita.svg'
import imgYape from '../../public/imgYape.jpg'
import yape from '../../public/yape.svg'
import { useForm } from 'react-hook-form'
import useShopping from '../hooks/useShopping'
import { useEffect, useState } from 'react'
import { configPostCollection } from '../services/fetchBase'
import { CollectionsConstants, PathConstants } from '../utils'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


const Checkout: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setValue,  reset } = useForm();
    const { shoppingList, getFromLocalStorage, selectLocal } = useShopping();
    const [formSubmitted, setFormSubmitted] = useState(false);
    let ordersInfo = {}

    let accumulateSubTotal = 0;

    if (Array.isArray(shoppingList)) {
        shoppingList.forEach((item: any) => {
            accumulateSubTotal += item.unit_price;
            accumulateSubTotal = parseFloat(accumulateSubTotal.toFixed(2));
        });
    }

    const onSubmit = handleSubmit((data) => {
        ordersInfo = {
            items: shoppingList,
            personal_info: data
        };
        const postData = async () => {
            try {
                console.log(ordersInfo);
                await configPostCollection(CollectionsConstants.ORDERS, ordersInfo);
                localStorage.clear();
                reset();
                setFormSubmitted(true);

            } catch (error) {
                console.error('Error al enviar los datos:', error);
            }
        };
        postData();
    });
    useEffect(() => {
        getFromLocalStorage();
    }, []);


    const handleRenud = () => {
        if (formSubmitted) { 
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Gracias por tu compra",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handlePayment = () => {
        Swal.fire({
            title: 'Pagá con yape',
            imageUrl: imgYape,
            imageWidth: 150,
            imageHeight: 150,
            timer: 4000,
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar',
            showCloseButton: true,
            customClass: {
                container: 'container-class-2',
                actions: 'actions-class pruebaclass',
                popup: 'swal2-popup noGrid',
                image: 'swal2-image img-yape',
                cancelButton: 'swal2-cancel',
                confirmButton: 'swal2-confirm'
            }
        }).then((result) => {
            if (result.isConfirmed) {

                setValue('payment', 'true');
            } else if (result.isDenied) {
                setValue('payment', 'false');
            }

        });
    };
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
                        > <Link to={`${PathConstants.RECOJO}/recojo`} className='location'> {selectLocal.sede} </Link></p>
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
                                <div className='item-metodos' >

                                    <li className='metodo-tipo-incognita'><img src={incognita} /></li>

                                    <button className={`metodo-tipo ${errors.payment ? 'denied-pago' : ''}`} type="button" onClick={handlePayment}

                                    ><img src={yape} /></button>

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
                                        {...register('privacyTerms', {
                                            required: true
                                        })}
                                    />
                                    <label htmlFor="privacidad-term">Acepto los <a> términos y condiciones y política de privacidad de datos personales.</a></label>
                                    {
                                        errors.phoneNumber && <h5 className='mensaje-error'>Debe aceptar los terminos y condiciones.</h5>
                                    }
                                </div>

                            </div>
                        </div>

                        <button type='submit' className='btn-finalizado' onClick={handleRenud}><span className='circle-one'>1</span>finalizar compra <span className='price-checkout'>S/. 32.80</span></button>
                    </form>
                </div>
            </section>
            <aside className='checkout-separacion'>
                <h2 className='title-checkout'>DETALLE DE PEDIDO</h2>
                <div className='contenedor-detalle contenedor-body-2'>
                    {(Object.keys(shoppingList).length !== 0) && shoppingList.map((item: any, index: number) => (
                        <div className='detalle-item' key={index}>
                            <div className='contenedor-img'>
                                <img src='https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-cyber-parrillero-marzo-2024.jpg' alt='Imagen del producto' />
                            </div>
                            <div className='contenedor-txt'>
                                <p className='nombre-pedido'>{`${item.quantity} x ${item.name}`}</p>
                                <p className='precio-detalle'>{`S/. ${item.unit_price}`}</p>
                                <a href='#'>Ver detalle</a>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='detalle-costo contenedor-body-2'>
                    <p className='title-encabezado-detalle'>Ingresa tu cupón de descuento</p>
                    <div className='cupon-descuento'>
                        <input type="search" id='cupon' className='search-cupon' placeholder='Código' />
                        <button type='submit' id='cupon' className='btn-cupon'>Aplicar</button>
                    </div>

                    <div className='contenedor-detalle-precio'>
                        <div className='seccion-detalle-item'>
                            <p className='desc-left'>Subtotal</p>
                            <p className='desc-precio'>{`S/. ${accumulateSubTotal.toFixed(2)}`}</p>
                        </div>
                        <div className='seccion-detalle-item'>
                            <p className='desc-left'>Envío</p>
                            <p className='desc-precio'>S/. 0.00</p>
                        </div>
                        <div className='seccion-detalle-item'>
                            <p className='desc-left'>Puntos de compra</p>
                            <p className='desc-precio red-color'>0pts</p>
                        </div>
                        <div className='seccion-detalle-item sec-final'>
                            <p className='desc-left'>Total</p>
                            <p className='desc-precio'>{`S/. ${accumulateSubTotal.toFixed(2)}`}</p>
                        </div>
                    </div>

                </div>



            </aside>
        </div>
    )
}

export default Checkout