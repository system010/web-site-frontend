import React from 'react'
import './App.css';
import { Footer } from './components/header/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/header/footer/Mainpage/MainPage';
function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
