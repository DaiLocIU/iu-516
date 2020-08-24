import React from 'react';
import './index.css';
import LayerGnb from './LayerGnb';
import LayerSearch from './LayerSearch';
import LayerTab from './LayerTab';
import LayerCs from './LayerCs';

const LayerWrap : React.FC = () => (
  <div className="layer_wrap">
    <LayerGnb />
    <LayerSearch />
    <LayerTab />
    <LayerCs />
  </div>
);

export default LayerWrap;
