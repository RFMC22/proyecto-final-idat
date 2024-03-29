import useShopping from '../../hooks/useShopping';
import './../../styles/BluetBtn.css';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { PathConstants } from '../../utils';

const BlueBtn = ({
  text,
  myclass,
  setSaveLocalStorage,
}: {
  text: string;
  myclass: string;
  setSaveLocalStorage: any;
}) => {
  const navigate = useNavigate();
  const { handleOrderClick, getFromLocalStorage } = useShopping();
  // const MySwal = withReactContent(Swal);
  const location = useLocation();
  const LoadingView = () => {
    // Show loading indicator with SweetAlert2
    const loadingToast = Swal.fire({
      imageUrl:
        'https://www.bembos.com.pe/_nuxt/img/burger_loading.04ec20c.gif', // Set the URL of your loading image
      imageWidth: 200, // Set height of the loading image
      padding: '80px 80px',
      width: '590px',
      showConfirmButton: false, // Hide confirm button
      allowOutsideClick: false, // Prevent dismissing by clicking outside
      customClass: { popup: 'loading-container', image: 'loadingpopup-image' },
    });

    // Simulate loading completion (replace setTimeout with your actual loading logic)
    setTimeout(() => {
      // Close the loading toast
      loadingToast.close();

      // After loading completes, trigger the confirmation toast
      Swal.fire({
        // title: 'ACABAS DE AGREGAR',
        html: '<h2 class="popup-title">ACABAS DE AGREGAR</h2><p class="popup-maintext">Combo Extrema</p><p class="popup-secondarytext"> a tu Bolsa de Compras</p>',
        imageUrl:
          'https://www.bembos.com.pe/_ipx/q_75,s_200x200/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-extrema-nuevo-bb-blanco.png', // Set the URL of your confirmation image
        imageHeight: 200, // Set height of the confirmation image
        showCancelButton: true,
        cancelButtonText: 'SEGUIR COMPRANDO',
        cancelButtonColor: 'rgb(33, 56, 139)',
        confirmButtonText: 'VER BOLSA DE COMPRAS',
        confirmButtonColor: 'rgb(255, 181, 0)',
        allowOutsideClick: false, // Prevent dismissing by clicking outside
        customClass: {
          popup: 'popup-container-xyz',
          cancelButton: 'cancelbtn popup-btn',
          confirmButton: 'confirmbtn popup-btn',
          image: 'popup-image',
          title: 'popup-title',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(PathConstants.CART, {
            state: { background: location.pathname },
          });
        } else {
        }
      });
    }, 1500);

    return null;
  };

  return (
    <>
      <button
        className={`blueBtn ${myclass}`}
        onClick={() => {
          handleOrderClick(999, 0, '', 1, 1),
            setSaveLocalStorage(true),
            LoadingView();
          getFromLocalStorage();
        }}
      >
        {text}
      </button>
    </>
  );
};

export default BlueBtn;
