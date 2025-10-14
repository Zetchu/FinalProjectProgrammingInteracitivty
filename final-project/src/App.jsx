import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Images from './components/Images';

export default function App() {
  return (
    <>
      <Header />
      <main
        id='main'
        className='min-h-[70svh]'
      >
        <Hero />
        <Images />
        <Pricing />
        <FAQ />
      </main>
      {/* <Footer /> */}
    </>
  );
}
