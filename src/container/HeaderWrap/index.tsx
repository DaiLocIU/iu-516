import React from 'react';
import HdTop from './HdTop';
import HdCenter from './HdCenter';
import HdLnb from './HdLnb';
import HdLayerM from './HdLayerM';
import './index.css';

const HeaderWrap : React.FC = () => (
  <div id="header_wrap">
    <div id="header">
      <div className="hd_wrapper">
        <HdTop />
        <HdCenter />
        <HdLnb />
      </div>
    </div>
    <HdLayerM />
    <div id="hd_dim" />
  </div>
);
export default HeaderWrap;
