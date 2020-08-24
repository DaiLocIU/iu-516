/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './index.css';

const LayerTab : React.FC = () => {
  const [tab, setTag] = useState(1);
  const handleTogleClassOnTab1 = () => {
    setTag(1);
  };
  const handleTogleClassOnTab2 = () => {
    setTag(2);
  };
  return (
    <div className="layer_tab">
      <ul className="lnb_tab">
        <li id="lnbtab01" className={tab === 1 ? 'on' : 'off'} onClick={handleTogleClassOnTab1}>
          <span>CATEGORY</span>
        </li>
        <li id="lnbtab02" className={tab === 2 ? 'on' : 'off'} onClick={handleTogleClassOnTab2}>
          <span>BOARD</span>
        </li>
      </ul>
      <div className="lnb_tab_wrap">
        <div id="lnbtab01" className={tab === 1 ? 'lnb_tab_box on' : 'lnb_tab_box off'}>
          <div className="layer_lnb">
            <ul>
              <li><a href="#">EIGHT</a></li>
              <li><a href="#">April, 2020</a></li>
              <li><a href="#">2019 Love, poem</a></li>
            </ul>
          </div>
        </div>
        <div id="lnbtab02" className={tab === 2 ? 'lnb_tab_box on' : 'lnb_tab_box off'}>
          <div className="layer_lnb">
            <ul>
              <li><a href="#">Notice</a></li>
              <li><a href="#">Event</a></li>
              <li><a href="#">1:1 Inquiry</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerTab;
