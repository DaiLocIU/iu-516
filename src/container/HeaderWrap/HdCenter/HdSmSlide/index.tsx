import React, { useRef } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import banner_april2020 from '../../../../img/banner/banner_april2020.jpg';
import banner_lovepoem from '../../../../img/banner/banner_lovepoem.jpg';
import banner_eight from '../../../../img/banner/banner_eight.jpg';
import './index.css';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

const HdSmSlide : React.FC = () => {
  const ref = useRef() as any;
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 860,
        settings: 'unslick',
      } as ResponsiveObject,
    ],

  };
  return (
    <div className="hd_sm_slide">
      <Slider ref={ref} {...settings}>
        <div className="slide_1" tabIndex={-1} role="option">
          <a href="#" tabIndex={0} />
          <img src={banner_april2020} alt="april2020" />
        </div>
        <div className="slide_2" tabIndex={-1} role="option">
          <a href="#" tabIndex={-1} />
          <img src={banner_lovepoem} alt="lovepoem 2019" />
        </div>
        <div className="slide_3" tabIndex={-1} role="option">
          <a href="#" tabIndex={-1} />
          <img src={banner_eight} alt="eight" />
        </div>
      </Slider>
    </div>
  );
};
export default HdSmSlide;
