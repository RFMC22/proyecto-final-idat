import PreguntasFrecuentes from '../components/shared/PreguntasFrecuentes';
import { getPreguntasFrecuentes } from '../services';
import { useEffect, useState } from 'react';
import { PreguntasFrecuente } from '../interfaces/';
import './../styles/pages/Beneficios.css';
import { friendzone, gileos, relacion, destinados } from '../assets/images';
import { SwiperComponent } from '../components/shared';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../components';

const Beneficios = () => {
  const [preguntasFrecuentesData, setPreguntasFrecuentesData] =
    useState<PreguntasFrecuente[]>();

  try {
    useEffect(() => {
      const getDataOrders = async () => {
        const response = await getPreguntasFrecuentes();
        return response && setPreguntasFrecuentesData(response.data);
      };
      getDataOrders();
    }, []);
  } catch (error) {
    console.log(error);
  }

  const beneficioSwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 60,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Navigation],
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  const cardExperiment = {
    precio: 39.9,
    nombre: 'La Churrita del barrio',
    img: 'https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-la-churrita-del-barrio-benenficios.jpg',
    link: '/la-churrita-del-barrio-3400',
    id: 1,
  };

  return (
    <section className="container">
      <div className="Beneficios">
        <div className="beneficios-header">
          <h1>DISFRUTA NUESTROS BENEFICIOS | BEMBOS</h1>
        </div>
        <nav className="beneficios-nav">
          <ul className="benficios-nav-list">
            <li className="nav-item">
              <img src={friendzone} alt="frienzone-icon" />{' '}
              <span>FRIENDOZE</span>
            </li>
            <li className="nav-item">
              <img src={gileos} alt="frienzone-icon" />
              <>
                <span>GILEOS</span>
              </>
            </li>
            <li className="nav-item">
              <img src={relacion} alt="frienzone-icon" />
              <span>RELACION</span>
            </li>
            <li className="nav-item">
              <img src={destinados} alt="frienzone-icon" />
              <span>DESTINADOS</span>
            </li>
          </ul>
        </nav>

        <section className="beneficios-menu">
          <div className="beneficios-menu-header">
            <div className="left">
              <div className="circle">
                <img src={friendzone} alt="friendzone-icon" />
              </div>
              <h3>FRIENDZONE</h3>
              <p>Iniciar Sesion</p>
            </div>
            <div className="right">
              <p>PROMOCIONES POR TU AMISTAD</p>
            </div>
          </div>

          <SwiperComponent
            options={beneficioSwiperOptions}
            className="beneficiosSwiper"
          >
            <SwiperSlide>
              <Card {...cardExperiment} />
            </SwiperSlide>

            <SwiperSlide>
              <Card {...cardExperiment} />
            </SwiperSlide>

            <SwiperSlide>
              <Card {...cardExperiment} />
            </SwiperSlide>
          </SwiperComponent>
        </section>
        {preguntasFrecuentesData &&
          preguntasFrecuentesData[0].beneficios.map((pregunta) => (
            <PreguntasFrecuentes
              title={pregunta.titulo}
              children={pregunta.respuesta}
              myclass={'MyQuestions'}
            />
          ))}
      </div>
    </section>
  );
};

export default Beneficios;
