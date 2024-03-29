import '../../styles/Footer.css'
import libroReclamaciones from '../../assets/libro-de-reclamaciones.webp'

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'
import { AiOutlineFileText } from "react-icons/ai"
import { useState } from 'react'
import InputEmail from '../InputEmail/InputEmail'
import { useLocation } from 'react-router-dom'
import { PathConstants } from '../../utils'

const Footer = () => {
  const {pathname} = useLocation();
  
  const [showLocales, setShowLocales] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const toggleLocales = () => {
    setShowLocales(!showLocales);
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='social-icons'>
          <a href="#"><FaFacebookF
            size={'1.5rem'}
            color={'#173083'}
          /></a>
          <a href="#"><FaYoutube
            size={'1.5rem'}
            color={'#173083'}
          /></a>
          <a href="#"><FaTwitter
            size={'1.5rem'}
            color={'#173083'}
          /></a>
          <a href="#"><FaInstagram
            size={'1.5rem'}
            color={'#173083'}
          /></a>
        </div>
        <div className='main-content'>
          <div className='main-content__item'>
            <div className="item-top">
              <span onClick={toggleLocales}>MAPA DEL SITIO</span>
              <ul className={`toggle ${showLocales ? 'active' : ''}`}>
                <li><a href="#">Locales</a></li>
                <li><a href="#">Zonas de Reparto</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Atención al Cliente</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Mapa de sitio</a></li>
              </ul>
              <span className='b-b' onClick={toggleTerms}>TÉRMINOS Y CONDICIONES</span>
              <ul className={`toggle ${showTerms ? 'active' : ''}`}>
                <li><a href="#">Políticas de Datos Personales</a></li>
                <li><a href="#">Términos y condiciones de Promociones</a></li>
                <li><a href="#">Derechos ARCO</a></li>
              </ul>
            </div>
            <div data-v-2bb739df="" className="img-logo"><svg data-v-2bb739df="" xmlns="http://www.w3.org/2000/svg" width="163.686" height="56.966"><path d="M108.534.003c-.357 1.915-.75 3.826-1.192 5.723-1.786.018-31.44 2.744-35.866 3.05.255-1.9.784-3.745 1.138-5.624 3.584-.386 27.536-2.473 35.92-3.149zM149.239 8.871a14.909 14.909 0 0 1 9.545-3.134 33.944 33.944 0 0 1 4.9.161c-.376 2.325-.938 4.62-1.408 6.928-.156.7-.288 1.409-.5 2.1a6.582 6.582 0 0 0-5.184-.576 3.615 3.615 0 0 0-2.48 2.6 2.213 2.213 0 0 0 .376 2.082c1.121 1.359 2.831 2.03 4.045 3.292a7.537 7.537 0 0 1 2.466 5.694 13.921 13.921 0 0 1-2.127 8.13 13.335 13.335 0 0 1-8.221 5.278 21.587 21.587 0 0 1-9.809.1c.643-2.9 1.217-5.81 1.857-8.71 1.682.28 3.46.669 5.132.129a3.315 3.315 0 0 0 2.266-3.806c-.539-1.338-1.854-2.1-2.911-2.985a17.559 17.559 0 0 1-2.524-2.5 25.875 25.875 0 0 1-10.828 16.11 23.939 23.939 0 0 1-9.938 4.225 14.8 14.8 0 0 1-10.239-1.766 11.787 11.787 0 0 1-4.957-6.489 15.889 15.889 0 0 1-11.807 9.548c-2.345.44-4.742.489-7.109.752-4.6.364-9.2.8-13.8 1.174-.545-4.415-1.141-8.824-1.661-13.243-2.112 2.349-7.489 8.929-8.162 9.788-.547-.757-3.909-6.988-5.23-9.236-.06.009-4.545 9.73-6.651 14.6-4.752.472-24.736 2.243-29.975 2.6.424-2.318 1.042-4.6 1.367-6.939a16.037 16.037 0 0 1-8.947 7.15 20 20 0 0 1-5.128.94c-3.869.307-7.729.728-11.6.962.689-3.894 6.9-32.8 7.2-33.925 1.857-.19 3.72-.3 5.577-.491 3.078-.209 6.232-.8 9.275.009a6.069 6.069 0 0 1 4.288 3.247 8.656 8.656 0 0 1 .479 4.285 8.028 8.028 0 0 1-4.808 6.372 6.258 6.258 0 0 1 3.666 1.867 6.881 6.881 0 0 1 1.373 3.481c1.51-6.955 2.931-13.931 4.458-20.882 6.307-.584 21.134-1.894 22.243-1.916-.528 2.985-1.3 5.924-1.817 8.909-.542.134-9.411.87-13.291 1.205a37.36 37.36 0 0 0-.869 4.237c3.518-.295 7.03-.679 10.552-.916-.431 2.339-1.524 7.482-1.789 7.482-3.472.376-6.958.593-10.434.929-.244 1.4-.6 2.771-.828 4.17 4.372-.325 8.738-.735 13.107-1.1.252-.01.3-.318.423-.487 2.861-6.57 5.769-13.121 8.618-19.7.858-1.845 1.6-3.74 2.493-5.568 2.217 4.029 7.105 12.9 7.355 13.293 3.927-4.625 12.261-14.969 12.8-15.191 1.261 8.122 2.629 16.229 3.911 24.348.122-.225 3.667-16.746 5.366-24.759 3.144-.292 6.293-.545 9.439-.84 2.538-.161 5.254-.111 7.521 1.186a5.37 5.37 0 0 1 2.632 3.771 9.182 9.182 0 0 1-.973 5.959 7.279 7.279 0 0 1-3.871 3.327 8.125 8.125 0 0 1 2.478.83 7.778 7.778 0 0 1 1.778 1.591 25.006 25.006 0 0 1 8.288-14.05 26.24 26.24 0 0 1 9.018-5.336 17.983 17.983 0 0 1 9.428-.786 12.121 12.121 0 0 1 7.642 4.959 12.879 12.879 0 0 1 1.462 2.972 16.376 16.376 0 0 1 5.052-7.441zm-21.992 8.622a13.136 13.136 0 0 0-9.313 8.8 7.633 7.633 0 0 0 .329 5.544 5.8 5.8 0 0 0 3.97 3.019 9.455 9.455 0 0 0 6.3-1.106 14.406 14.406 0 0 0 4.806-4.27 9.9 9.9 0 0 0 1.975-7.037 5.85 5.85 0 0 0-3.907-4.788 7.7 7.7 0 0 0-4.16-.162zm-30.618 2.019c-.4 1.745-.806 3.491-1.085 5.261a7.091 7.091 0 0 0 4.258-1.057 3.513 3.513 0 0 0 1.2-3.436 1.813 1.813 0 0 0-1.483-.929 13.625 13.625 0 0 0-2.892.158zm-82.195 7.181c-.3 1.772-.793 3.507-1.095 5.28a8.973 8.973 0 0 0 3.727-.7 3.716 3.716 0 0 0 1.858-3.072 1.53 1.53 0 0 0-1.226-1.6 11.336 11.336 0 0 0-3.264.092zm79.513 5.6c-.479 2-.942 4.012-1.312 6.036a10.8 10.8 0 0 0 3.985-.676 4.307 4.307 0 0 0 2.343-3.523 1.752 1.752 0 0 0-1.187-1.834 10.562 10.562 0 0 0-3.829-.003zm-82.24 7.261c-.442 1.978-.868 3.968-1.219 5.968a17.069 17.069 0 0 0 3.292-.412 4.093 4.093 0 0 0 2.861-4.74c-.51-1.022-1.817-1.144-2.829-1.072a10.657 10.657 0 0 0-2.104.258zM139.392 48.342a3.358 3.358 0 0 1-.185 1.563c-.341 1.317-.533 2.663-.83 3.99-1.151.305-34.981 3.053-35.97 3.071.194-1.858.74-3.66 1.1-5.49 1.937-.282 34.008-3.174 35.885-3.134z" style={{fill: 'rgb(255, 255, 255)'}}></path></svg></div>
          </div>
          <div className='main-content__item'>
            <p className='title-methods'>FORMAS DE PAGO</p>
            <ul className='list-methods'>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="72.972" height="39.692" viewBox="0 0 72.972 39.692"><rect width="72.972" height="39.692" rx="4.679" style={{fill: 'rgb(255, 255, 255)'}}></rect><path d="M33.016 28.029h-4.257l2.661-16.354h4.258zM25.176 11.675l-4.059 11.248-.48-2.422-1.432-7.354a1.823 1.823 0 0 0-2.02-1.473h-6.71l-.079.277a15.89 15.89 0 0 1 4.454 1.87l3.7 14.208h4.433l6.774-16.354zM58.667 28.03h3.91l-3.409-16.354h-3.423a1.956 1.956 0 0 0-1.965 1.219l-6.35 15.136h4.438l.888-2.429h5.413zm-4.685-5.785 2.237-6.121 1.259 6.121zM47.762 15.607l.608-3.512a12.294 12.294 0 0 0-3.83-.713c-2.113 0-7.131.924-7.131 5.414 0 4.226 5.889 4.278 5.889 6.5s-5.282 1.822-7.025.422l-.633 3.671a11.921 11.921 0 0 0 4.807.924c2.9 0 7.289-1.505 7.289-5.6 0-4.252-5.942-4.648-5.942-6.5s4.146-1.61 5.968-.606z" style={{fill: 'rgb(0, 92, 168)'}}></path><path d="m165.254 967.945-1.432-7.354a1.823 1.823 0 0 0-2.02-1.473h-6.71l-.079.277a16.5 16.5 0 0 1 6.32 3.173 12.748 12.748 0 0 1 3.921 5.377z" transform="translate(-144.617 -947.443)" style={{fill: 'rgb(246, 167, 35)'}}></path></svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="72.972" height="39.692" viewBox="0 0 72.972 39.692"><g><rect width="72.972" height="39.692" rx="4.679" style={{fill: 'rgb(255, 255, 255)'}}></rect><path d="M25.284 34.1v-1.817a1.064 1.064 0 0 0-1.149-1.149 1.193 1.193 0 0 0-1.028.514 1.058 1.058 0 0 0-.967-.514.977.977 0 0 0-.847.423v-.363h-.635v2.9h.635v-1.6c0-.514.272-.756.7-.756s.635.272.635.756v1.6h.635v-1.6a.669.669 0 0 1 .7-.756c.423 0 .635.272.635.756v1.6zm9.4-2.9h-1.028v-.877h-.635v.877l-.576-.006v.574h.575v1.331c0 .665.272 1.058 1 1.058a1.684 1.684 0 0 0 .786-.212l-.181-.544a.994.994 0 0 1-.544.151c-.3 0-.424-.181-.424-.483v-1.3h1.028v-.574zm5.381-.06a.852.852 0 0 0-.755.423V31.2h-.635v2.9h.635v-1.633c0-.483.211-.756.6-.756a1.772 1.772 0 0 1 .393.06l.181-.6a2 2 0 0 0-.424-.03zm-8.132.3a2.078 2.078 0 0 0-1.18-.3c-.725 0-1.209.363-1.209.937 0 .484.363.755 1 .847l.3.03c.332.061.514.152.514.3 0 .212-.242.363-.665.363a1.671 1.671 0 0 1-.967-.3l-.3.483a2.135 2.135 0 0 0 1.239.363c.847 0 1.331-.393 1.331-.937 0-.514-.393-.786-1-.877l-.3-.03c-.272-.03-.483-.091-.483-.272 0-.211.212-.333.544-.333a2.178 2.178 0 0 1 .907.242l.272-.514zm16.87-.3a.853.853 0 0 0-.756.423V31.2h-.635v2.9h.635v-1.633c0-.483.212-.756.6-.756a1.773 1.773 0 0 1 .393.06l.181-.6a2 2 0 0 0-.423-.03zm-8.1 1.511a1.453 1.453 0 0 0 1.542 1.512 1.5 1.5 0 0 0 1.028-.333l-.3-.514a1.221 1.221 0 0 1-.755.272.858.858 0 0 1-.877-.937.892.892 0 0 1 .877-.937 1.219 1.219 0 0 1 .755.273l.3-.514a1.506 1.506 0 0 0-1.028-.332 1.452 1.452 0 0 0-1.542 1.511zm5.865 0V31.2h-.635v.363a1.092 1.092 0 0 0-.907-.423 1.513 1.513 0 0 0 0 3.023 1.016 1.016 0 0 0 .907-.424v.363h.635zm-2.328 0a.879.879 0 1 1 1.753 0 .879.879 0 1 1-1.753 0zm-7.589-1.511a1.512 1.512 0 0 0 .03 3.023 1.846 1.846 0 0 0 1.179-.393l-.3-.453a1.444 1.444 0 0 1-.847.3.816.816 0 0 1-.877-.7h2.146l-.006-.234a1.335 1.335 0 0 0-1.33-1.542zm0 .544a.707.707 0 0 1 .726.7l-1.512.001a.766.766 0 0 1 .786-.7zm15.752.968v-2.6h-.635v1.511a1.093 1.093 0 0 0-.907-.423 1.513 1.513 0 0 0 0 3.023 1.016 1.016 0 0 0 .907-.424v.363h.635zm-2.328 0a.879.879 0 1 1 1.754 0 .879.879 0 1 1-1.754 0zm-21.223 0v-1.451h-.635v.363a1.093 1.093 0 0 0-.907-.423 1.513 1.513 0 0 0 0 3.023 1.017 1.017 0 0 0 .907-.424v.363h.635zm-2.359 0a.879.879 0 1 1 1.754 0 .879.879 0 1 1-1.754 0z"></path><path transform="translate(31.724 9.158)" d="M0 0h9.523v17.112H0z" style={{fill: 'rgb(255, 95, 0)'}}></path><path d="M328.28 961.355a10.914 10.914 0 0 1 4.142-8.556 10.884 10.884 0 1 0 0 17.112 10.868 10.868 0 0 1-4.142-8.556z" transform="translate(-295.951 -943.641)" style={{fill: 'rgb(235, 0, 27)'}}></path><path d="M363.921 961.355a10.873 10.873 0 0 1-17.6 8.556 10.908 10.908 0 0 0 0-17.112 10.873 10.873 0 0 1 17.6 8.556z" transform="translate(-309.824 -943.641)" style={{fill: 'rgb(247, 158, 27)'}}></path></g></svg>
              </li>
              <li className='img_express'>
                <svg xmlns="http://www.w3.org/2000/svg" width="101.745" height="32.905" viewBox="0 0 101.745 36.905"><g transform="translate(-593.107 -1537.342)"><path d="M612.858,1574.247v-15.974h16.913l1.815,2.366,1.874-2.366h61.392v14.872a7.092,7.092,0,0,1-3.463,1.1H657.4l-2.046-2.518v2.518h-6.7v-4.3a5.626,5.626,0,0,1-2.9.6h-2.282v3.7H633.317l-1.812-2.416-1.84,2.416Z" fill="#fff" fillRule="evenodd"></path> <path d="M593.107,1546.234l3.814-8.892h6.6l2.164,4.981v-4.981h8.2l1.288,3.6,1.25-3.6h36.806v1.81a7.941,7.941,0,0,1,5.115-1.81l11.943.042,2.127,4.915v-4.957h6.861l1.889,2.823v-2.823h6.925v15.974H681.16l-1.81-2.833v2.833H669.269l-1.014-2.518h-2.71l-1,2.518h-6.836a6.758,6.758,0,0,1-4.486-1.773v1.773H642.917l-2.046-2.518v2.518H602.54l-1.013-2.518h-2.7l-1.006,2.518h-4.712v-7.082Z" fill="#fff" fillRule="evenodd"></path> <path d="M598.271,1539.311l-5.144,11.961h3.349l.949-2.4h5.518l.944,2.4h3.423l-5.139-11.961Zm1.9,2.784,1.682,4.185h-3.369l1.687-4.185Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M607.664,1551.27v-11.961l4.759.018,2.768,7.712,2.7-7.729h4.721v11.961h-2.99v-8.813l-3.17,8.813h-2.622l-3.179-8.813v8.813Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M624.661,1551.27v-11.961h9.757v2.675h-6.736v2.046h6.578v2.518h-6.578v2.125h6.736v2.6Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M636.15,1539.311v11.961h2.99v-4.25H640.4l3.585,4.25h3.654l-3.934-4.407a3.642,3.642,0,0,0,3.28-3.674,3.868,3.868,0,0,0-4.18-3.88Zm2.99,2.676h3.418a1.372,1.372,0,0,1,1.416,1.259,1.351,1.351,0,0,1-1.372,1.259H639.14v-2.518Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M651.258,1551.27H648.2v-11.961h3.053v11.961Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M658.5,1551.27h-.659c-3.188,0-5.124-2.512-5.124-5.932,0-3.5,1.914-6.029,5.941-6.029h3.3v2.833h-3.426c-1.635,0-2.791,1.275-2.791,3.226,0,2.316,1.322,3.289,3.227,3.289h.787l-1.26,2.613Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M665,1539.311l-5.144,11.961h3.349l.949-2.4h5.518l.945,2.4h3.422l-5.139-11.961Zm1.9,2.784,1.682,4.185H665.22l1.687-4.185Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M674.393,1551.27v-11.961h3.8l4.854,7.515v-7.515h2.99v11.961H682.36l-4.977-7.711v7.711Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M614.9,1572.2V1560.24h9.758v2.676h-6.736v2.046H624.5v2.518h-6.578v2.125h6.736v2.6Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M662.715,1572.2V1560.24h9.758v2.676h-6.736v2.046h6.547v2.518h-6.547v2.125h6.736v2.6Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M625.04,1572.2l4.751-5.907-4.864-6.054h3.767l2.9,3.743,2.907-3.743h3.62l-4.8,5.98,4.76,5.98H634.31l-2.813-3.684-2.744,3.684Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M638.432,1560.242V1572.2H641.5v-3.777h3.147c2.663,0,4.682-1.413,4.682-4.161a3.936,3.936,0,0,0-4.293-4.023Zm3.069,2.705h3.314a1.35,1.35,0,0,1,1.476,1.377,1.379,1.379,0,0,1-1.485,1.377H641.5v-2.754Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M650.629,1560.24V1572.2h2.99v-4.249h1.259l3.585,4.249h3.654l-3.934-4.407a3.642,3.642,0,0,0,3.28-3.673,3.87,3.87,0,0,0-4.18-3.881Zm2.99,2.676h3.418a1.372,1.372,0,0,1,1.416,1.259,1.352,1.352,0,0,1-1.372,1.259h-3.462v-2.518Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M673.857,1572.2v-2.6h5.985c.885,0,1.269-.478,1.269-1,0-.5-.383-1.011-1.269-1.011h-2.7a3.343,3.343,0,0,1-3.66-3.582c0-1.918,1.2-3.768,4.692-3.768h5.823l-1.259,2.692H677.7c-.963,0-1.259.505-1.259.987a1.043,1.043,0,0,0,1.1,1.043h2.833c2.62,0,3.757,1.486,3.757,3.433a3.586,3.586,0,0,1-3.9,3.806Z" fill="#016fd0" fillRule="evenodd"></path> <path d="M684.832,1572.2v-2.6h5.731c.886,0,1.269-.478,1.269-1,0-.5-.382-1.011-1.269-1.011h-2.451a3.343,3.343,0,0,1-3.659-3.582c0-1.918,1.2-3.768,4.691-3.768h5.708l-1.259,2.692h-4.921c-.963,0-1.259.505-1.259.987a1.043,1.043,0,0,0,1.1,1.043h2.579c2.621,0,3.758,1.486,3.758,3.433a3.586,3.586,0,0,1-3.9,3.806Z" fill="#016fd0" fillRule="evenodd"></path></g></svg>
              </li>
            </ul>
            <div className='safety'>
              <svg xmlns="http://www.w3.org/2000/svg" width="162.527" height="33.86" viewBox="0 0 162.527 33.86"><path d="M27.392 10.728h11.662v2.981h-7.45v2.425h6.441v2.8h-6.441v5.671h-4.212zM52.829 13.708v-2.986H41.153V24.6h11.663v-2.981h-7.441v-2.69h4.926v-2.8h-4.926v-2.423zM151.497 10.748l-2.457 4.684-2.445-4.684h-4.178l4.5 8.068v5.812h4.21v-5.812l4.515-8.068zM68.55 10.697h4.167l2.459 4.69 2.452-4.69h4.15l-4.524 8.064v5.819h-4.206v-5.823zM129.519 11.845a4.915 4.915 0 0 0-3.507-1.111h-6.976v13.883h4.141v-5.152h2.355a5.529 5.529 0 0 0 3.882-1.179 4.277 4.277 0 0 0 1.27-3.287 4.14 4.14 0 0 0-1.165-3.154zm-3.536 4.381a2.056 2.056 0 0 1-1.15.4 6.307 6.307 0 0 1-.6.031h-1.06v-3.093h1.229c.154 0 .3 0 .426.011a1.833 1.833 0 0 1 1.219.44 1.528 1.528 0 0 1 .436 1.111 1.385 1.385 0 0 1-.501 1.1zM54.614 10.734h12.8l-.011 2.977h-4.3l.015 10.907h-4.21l-.016-10.907h-4.3zM21.636 10.719h-4.09l-4.568 13.878h4.216l.588-2.287h3.611l.6 2.287h4.21zm-1.693 8.584h-1.347l.956-4.988.051.241.1.472v.018l.9 4.254zM138.496 10.734h-4.089l-4.564 13.887h4.208l.592-2.292h3.611l.6 2.292h4.221zm-2.036 8.591h-1.012l.965-4.99.047.243 1.008 4.746zM0 19.834h4.048a2.433 2.433 0 0 0 .519 1.337 2.285 2.285 0 0 0 1.891.81 2.173 2.173 0 0 0 1.412-.414 1.237 1.237 0 0 0 .49-.966 1.216 1.216 0 0 0-.465-.937 5.671 5.671 0 0 0-2.2-.774 9.412 9.412 0 0 1-4.012-1.631 3.245 3.245 0 0 1-1.219-2.586 3.418 3.418 0 0 1 .625-1.958 4.055 4.055 0 0 1 1.86-1.453 8.928 8.928 0 0 1 3.407-.527 7.194 7.194 0 0 1 4.052.955 4.236 4.236 0 0 1 1.662 3.1H7.994a1.62 1.62 0 0 0-.641-1.148 2.227 2.227 0 0 0-1.419-.407 1.76 1.76 0 0 0-1.13.307.933.933 0 0 0-.378.746.74.74 0 0 0 .312.578 3.585 3.585 0 0 0 1.439.491 18.774 18.774 0 0 1 4.018 1.188 4.157 4.157 0 0 1 1.767 1.486 3.694 3.694 0 0 1 .552 1.99 4.171 4.171 0 0 1-.734 2.379 4.531 4.531 0 0 1-2.061 1.655 8.552 8.552 0 0 1-3.334.561c-2.357 0-3.985-.439-4.9-1.318A5.334 5.334 0 0 1-.01 19.833M156.656 10.906h2.51v.663h-.848v2.009h-.818v-2.009h-.844zM159.528 10.906h1.081l.42 1.626.418-1.626h1.081v2.672h-.676v-2.036l-.519 2.036h-.612l-.518-2.036v2.036h-.674zM98.903 0l-16.93 16.93 16.93 16.93 16.93-16.93zm-3.291 27.24-4.991-4.991 5.185-5.185-5.185-5.185 4.991-4.991 5.185 5.185 4.991 4.991zm15.237-8.427-8.388 8.388-1.9-1.9 8.388-8.388-8.388-8.388 1.9-1.9 10.293 10.292-1.9 1.9z" style={{ fill: 'var(--white)' }}></path></svg>
            </div>
            <div className='comprobante'>
              <a href="#">
                <AiOutlineFileText size={'2rem'} />
                Comprobantes
              </a>
            </div>
          </div>
          <div className='main-content__item p-15'>
            <InputEmail />
            <div className='libro-reclamaciones'>
              <a href="#">
                <img src={libroReclamaciones} alt="Libro de reclamaciones" />
              </a>
            </div>
          </div>
        </div>
        <div className={PathConstants.PROMOCIONES_DELIVERY === pathname ? 'main-footer footer-p' : 'main-footer'}>
          <p>&copy; 2019 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer