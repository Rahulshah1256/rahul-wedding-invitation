import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import Header from './components/Header';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
import WeadingDetails from './components/WeadingDetails2';
import Invitation from './components/Invitation';
import Weadingloaction from './components/Weadingloaction'
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <WeadingDate />
      <CountDown />
      <Invitation />
      <ImageSlider />
      <Weadingloaction />
      <WeadingDetails />
      <Contact />
    </div>
  );
}

export default App;
