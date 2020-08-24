import React from 'react';
import './index.css';

const HdLnb : React.FC = () => (
  <div className="hd_lnb">
    <div className="w_custom">
      <div className="hd_all">
        &#10095;
      </div>
      <div className="hd_lnb_one">
        <div className="sub_menu_box swiper-container side_type">
          <ul className="sub_depth0 sub_menu0">
            <li className="slick-slide depth0_li">
              <a href="#">EIGHT</a>
            </li>
            <li className="slick-slide depth0_li">
              <a href="#">April, 2020</a>
            </li>
            <li className="slick-slide depth0_li">
              <a href="#">Love Poem, 2019</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HdLnb;
