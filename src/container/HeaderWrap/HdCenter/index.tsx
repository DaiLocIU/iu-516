import React from 'react';
import './index.css';
import logo from '../../../img/banner/madeedam.jpg';
import HdSmSlide from './HdSmSlide';
import HdSearchWrap from './HdSearchWrap/index';
import HdAll from './HdAll';
import HdLnb from './HdLnb';

const HdCenter : React.FC = () => (
  <div className="hd_center">
    <div className="w_custom">
      <HdSmSlide />
      <h1>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </h1>
      <HdSearchWrap />
      <HdAll />
      <HdLnb />
    </div>
  </div>
);
export default HdCenter;
