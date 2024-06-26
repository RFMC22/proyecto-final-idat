import './../../styles/MenuCards.css';
import BlueBtn from '../shared/BlueBtn';
import { Link } from 'react-router-dom';

const MenuCards = ({ menuCardOptions }: any) => {
  return (
    <section className="MenuCards">
      {menuCardOptions.map((menuOption: any) => {
        return (
          <article className="flex flex-col width-100" key={menuOption.id}>
            <Link to={menuOption.link}>
              <div className="imageContainer">
                <img src={menuOption.img} alt="menu1" />
              </div>

              <div className="flex flex-center">
                <BlueBtn
                  text="Ver todos"
                  myclass="bluetBtn"
                  setSaveLocalStorage={''}
                />
              </div>
            </Link>

            <Link to={menuOption.link}>
              <p className="textRed">{menuOption.nombre}</p>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default MenuCards;
