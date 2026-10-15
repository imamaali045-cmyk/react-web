import React from 'react';
import Header from './component/header';
import Hero from './component/hero';
import About from './component/about';
import Feature from './component/feature'
import Testimonals from './component/Testimonals';
import Contact from './component/contact';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
   <>
      <Header />
      <Hero />
      <About/>
      <Feature/>
      <Testimonals />
      <Contact />
      <Footer />
</>
  );
}

export default App;
