import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function App() {
  return (
    <>
      <Header />
      <main
        id='main'
        className='min-h-[70svh]'
      >
        <Hero />
      </main>
      <Footer />
    </>
  );
}
