import React from 'react';
import './index.css';
import GlobalCountry from '../../../HdTop/GolabalCountry';

const LayerGnb : React.FC = () => (
  <div className="layer_gnb">
    <div className="global_menu">
      <GlobalCountry />
    </div>
    <div className="layer_gnb_bot">
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">MyPage</a></li>
      </ul>
      <a href="#" className="gnb_cart">
        <strong>0</strong>
      </a>
    </div>
  </div>
);
export default LayerGnb;
