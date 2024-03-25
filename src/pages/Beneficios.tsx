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
import { BeneficiosResponse } from '../interfaces/responses/BeneficiosResponse';
import { getBeneficios } from '../services/fetchBeneficios';
import { Destinado } from '../interfaces/model/Beneficios';

const Beneficios = () => {
  const [preguntasFrecuentesData, setPreguntasFrecuentesData] =
    useState<PreguntasFrecuente[]>();

  const [beneficiosOptions, setBeneficiosOptions] =
    useState<BeneficiosResponse>({});
  const [relacionData, setRelacionData] = useState<Destinado[] | undefined>();
  const [friendzoneData, setFriendzoneData] = useState<
    Destinado[] | undefined
  >();
  const [gileosData, setGileosData] = useState<Destinado[] | undefined>();
  const [destinadosData, setDestinadosData] = useState<
    Destinado[] | undefined
  >();
  const [clickedData, setClickedData] = useState<Destinado[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
    navigation: true,
    // pagination: {
    //   clickable: false,
    // },
    modules: [Navigation],
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  const getBeneficiosData = async () => {
    try {
      const response = await getBeneficios();
      setBeneficiosOptions(response);
      if (response.data !== undefined) {
        for (const beneficio of response.data) {
          const { relacion, frienzone, gileos, destinados } = beneficio;

          if (relacion) {
            setRelacionData(relacion);
          }
          if (frienzone) {
            setFriendzoneData(frienzone);
          }
          if (gileos) {
            setGileosData(gileos);
          }
          if (destinados) {
            setDestinadosData(destinados);
          }
        }
      }
      setLoading(false);
      console.log(clickedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBeneficiosData();
  }, []);

  const cardDefault = { nombre: '', img: '', link: '', id: 1, precio: 0 };
  const handleClick = (set: string = 'friendzone') => {
    if (set === 'friendzone') {
      return setClickedData(friendzoneData);
    } else if (set === 'gileos') {
      return setClickedData(gileosData);
    } else if (set === 'relacion') {
      return setClickedData(relacionData);
    } else if (set === 'destinados') {
      return setClickedData(destinadosData);
    }
  };

  return (
    <section className="container">
      <div className="Beneficios">
        <div className="beneficios-header">
          <h1>DISFRUTA NUESTROS BENEFICIOS | BEMBOS</h1>
        </div>
        <nav className="beneficios-nav">
          <ul className="benficios-nav-list">
            <li className="nav-item" onClick={() => handleClick('friendzone')}>
              <img src={friendzone} alt="frienzone-icon" />{' '}
              <span>FRIENDOZE</span>
            </li>
            <li className="nav-item" onClick={() => handleClick('gileos')}>
              <img src={gileos} alt="frienzone-icon" />
              <>
                <span>GILEOS</span>
              </>
            </li>
            <li className="nav-item" onClick={() => handleClick('relacion')}>
              <img src={relacion} alt="frienzone-icon" />
              <span>RELACION</span>
            </li>
            <li className="nav-item" onClick={() => handleClick('destinados')}>
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
            {loading ? (
              // Render loading state here
              <>
                <SwiperSlide>
                  <Card {...cardDefault} />
                </SwiperSlide>
                <SwiperSlide>
                  <Card {...cardDefault} />
                </SwiperSlide>
              </>
            ) : // Check if clickedData is undefined or empty
            (clickedData?.length ?? 0) > 0 ? (
              // Render clickedData if it exists and is not empty
              clickedData &&
              clickedData.map((relationship) => (
                <SwiperSlide key={relationship.id}>
                  <Card {...relationship} />
                </SwiperSlide>
              ))
            ) : (
              // Render default cards when clickedData is undefined or empty
              friendzoneData &&
              friendzoneData.map((relationship) => (
                <SwiperSlide key={relationship.id}>
                  <Card {...relationship} />
                </SwiperSlide>
              ))
            )}
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
