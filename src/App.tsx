import React from 'react';
import './App.css';
import HeaderWrap from './container/HeaderWrap';
import Container from './container/Container';

import Footer from './container/Footer';
import ScrollWrap from './container/ScrollWrap';

const App : React.FC = () => (
  <div id="wrap">
    <HeaderWrap />
    <Container />
    {/* <MainVisual /> */}
    <Footer />
    <br />
    <br />
    <ScrollWrap />
  </div>
);

export default App;
