import React, { useRef } from 'react';
import Slider from 'react-slick';
import './index.css';
import VisualContentWithVideoYoutube from './VisualContentWithVideoYoutube';
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

const MainVisual : React.FC = () => {
  const ref = useRef() as any;
  const settings = {
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    speed: 800,
    draggable: false,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main_visual main_section">
      <div className="visual_box">
        <Slider className="slider visual_list" ref={ref} {...settings}>
          <div className="visual_content visual_1">
            <a href="#" tabIndex={0} />
            <div className="visual_txt" />
          </div>
          <div className="visual_content visual_2">
            <a href="#" tabIndex={-1} />
            <div className="visual_txt" />
          </div>
          <VisualContentWithVideoYoutube />
        </Slider>
      </div>
    </div>
  );
};
export default MainVisual;
