/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './index.css';
import LayerWrap from './LayerWrap';

const HdLayerM : React.FC = () => {
  const handleClose = () => {
    const hd_layer_m = document.getElementById('hd_layer_m');
        hd_layer_m?.classList.remove('on');
        /* hd_dim at Header_Wrap */
        const hd_dim = document.getElementById('hd_dim');
        hd_dim?.classList.remove('on');
        document.body.style.overflow = 'inherit';
        document.body.style.height = 'auto';
  };

  return (
    <div id="hd_layer_m" onTouchMove={handleClose}>
      <div className="layer_box">
        <LayerWrap />
        <div className="layer_close" onClick={handleClose}>
          <div className="hd_all_btn2_m">
            &#9932;
          </div>
        </div>
      </div>
    </div>
  );
};
export default HdLayerM;
