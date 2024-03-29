import PreguntasFrecuentes from '../components/shared/PreguntasFrecuentes';
import { getPreguntasFrecuentes } from '../services';
import { useEffect, useState } from 'react';
import { BeneficiosHeaderProps, PreguntasFrecuente } from '../interfaces/';
import './../styles/pages/Beneficios.css';
import { friendzone, gileos, relacion, destinados } from '../assets/images';
import { Accordion, SwiperComponent } from '../components/shared';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { BeneficioHeader, Card } from '../components';
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
  const [clickedDataHeader, setClickedDataHeader] = useState<
    BeneficiosHeaderProps | undefined
  >({
    img: friendzone,
    title: 'FRIENDZONE',
    subtitle: 'Iniciar Sesion',
    reason: 'PROMOCIONES POR TU AMISTAD',
  });

  const beneficioSwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 60,
    navigation: true,
    modules: [Navigation],
    breakpoints: {
      800: {
        slidesPerView: 2,
      },
    },
  };

  const getDataOrders = async () => {
    try {
      const response = await getPreguntasFrecuentes();
      return response && setPreguntasFrecuentesData(response.data);
    } catch (error) {
      console.log(error);
    }
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBeneficiosData();
    getDataOrders();
  }, []);

  const cardDefault = { nombre: '', img: '', link: '', id: 1, precio: 0 };

  const handleClick = (set: string = 'friendzone') => {
    if (set === 'friendzone') {
      setClickedDataHeader({
        img: friendzone,
        title: 'FRIENDZONE',
        subtitle: 'Iniciar Sesion',
        reason: 'PROMOCIONES POR TU AMISTAD',
      });
      return setClickedData(friendzoneData);
    } else if (set === 'gileos') {
      setClickedDataHeader({
        img: gileos,
        title: 'GILEOS',
        subtitle: 'ALCANZA 100 PTS',
        reason: 'MULTIPLICA PUNTOS X2',
      });
      return setClickedData(gileosData);
    } else if (set === 'relacion') {
      setClickedDataHeader({
        img: relacion,
        title: 'RELACIÓN',
        subtitle: 'ALCANZA 400 PTS',
        reason: 'MULTIPLICA PUNTOS X3 | DELIVERY GRATIS',
      });
      return setClickedData(relacionData);
    } else if (set === 'destinados') {
      setClickedDataHeader({
        img: destinados,
        title: 'DESTINADOS',
        subtitle: 'ALCANZA 700 PTS',
        reason: 'MULTIPLICA PUNTOS X4 | DELIVERY GRATIS',
      });
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
          <BeneficioHeader
            img={clickedDataHeader?.img || friendzone}
            title={clickedDataHeader?.title || 'FRIENDZONE'}
            subtitle={clickedDataHeader?.subtitle || 'Iniciar Sesion'}
            reason={clickedDataHeader?.reason || 'PROMOCIONES POR TU AMISTAD'}
          />

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
        <div className="container">
          {preguntasFrecuentesData ? (
            preguntasFrecuentesData[0].beneficios.map((pregunta, index) => (
              <>
                <Accordion
                  title={pregunta.titulo}
                  className={'myQuestions'}
                  id={index}
                >
                  <p>{pregunta.respuesta}</p>
                </Accordion>
              </>
            ))
          ) : (
            <>
              <PreguntasFrecuentes
                // title={''}
                // children={''}
                myclass={'MyQuestions'}
              />
              <PreguntasFrecuentes
                // title={''}
                // children={''}
                myclass={'MyQuestions'}
              />
              <PreguntasFrecuentes
                // title={''}
                // children={''}
                myclass={'MyQuestions'}
              />
              <PreguntasFrecuentes
                // title={''}
                // children={''}
                myclass={'MyQuestions'}
              />
              <PreguntasFrecuentes
                // title={''}
                // children={''}
                myclass={'MyQuestions'}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
