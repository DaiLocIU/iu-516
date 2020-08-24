import React from 'react';
import './index.css';
import MainVisual from './MainVisual';

const Container : React.FC = () => (
  <div id="container">
    <div className="contents">
      <div className="sub_contents">
        <MainVisual />
      </div>
    </div>
  </div>
);

export default Container;
