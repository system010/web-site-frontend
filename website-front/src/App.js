import React from 'react'
import './App.css';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/mainpage/MainPage';
import { Picture } from './components/picture/Picture';
function App() {
  return (
    <div>
      <Header />
      <Picture />
      <MainPage />
      <Footer />

    </div>
  );
}

export default App;
