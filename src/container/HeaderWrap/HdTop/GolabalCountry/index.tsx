import React from 'react';
import './index.css';
import krLogo from '../../../../img/commonimg/ico_kr.png';
import usLogo from '../../../../img/commonimg/ico_us.png';
import cnLogo from '../../../../img/commonimg/ico_cn.png';

const GlobalCountry : React.FC = () => (
  <div className="top_country_list_0">
    <ul>
      <li>
        <a href="#">
          <img src={krLogo} alt="kr" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={usLogo} alt="us" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={cnLogo} alt="cn" />
        </a>
      </li>
    </ul>
  </div>
);
export default GlobalCountry;
