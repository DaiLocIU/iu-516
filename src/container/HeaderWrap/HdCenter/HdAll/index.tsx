/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './index.css';

const HdAll : React.FC = () => {
  const handleOnClick = () => {
    document.getElementById('hd_layer_m')?.classList.add('on');

    /* hd_dim at Header_Wrap */
    document.getElementById('hd_dim')?.classList.add('on');
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  };
  return (
    <div className="hd_all" onClick={handleOnClick}>
      <div className="hd_all_btn_m">
        &#9776;
      </div>
    </div>
  );
};
export default HdAll;
