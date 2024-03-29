import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabScrollClick } from '../../utils/GeneralFunctions';

const Tabs = ({
  elementoIncial,
  show,
  elementos,
}: {
  elementoIncial: any;
  show: any;
  elementos: any;
}) => {
  const [activeTab, setActiveTab] = useState(elementoIncial);

  const handleTabClick = (id: string) => () => {
    setActiveTab(id);
    tabScrollClick(id);
  };
  return (
    <div
      className={`ppromos-tabs-main ${
        show === 'desktop' ? 'showDesktop' : 'showMobile'
      } ppromos-tabs-list`}
    >
      {elementos.map((elemento: any) => (
        <Link
          to="#"
          key={elemento.id}
          onClick={handleTabClick(elemento.id)}
          className={activeTab === elemento.id ? 'active' : ''}
        >
          {elemento.nombre}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
