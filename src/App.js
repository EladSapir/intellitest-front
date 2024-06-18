import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Features from './Components/Features';
import ImageSection from './Components/ImageSection';
import Footer from './Components/Footer';
import './App.css';
import GlobalStyle from './GlobalStyle';
import bgImg from './Images/BG Image.png';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="content-container">
        <div className="background-image">
          <img src={bgImg} alt="bgImage" className="bg-img" />
        </div>
        <MainSection />
        <Features />
        <ImageSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
