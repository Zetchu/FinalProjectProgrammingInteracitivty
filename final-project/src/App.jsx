import { useState } from 'react';
import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import VideoSection from './sections/VideoSection';
import Features from './sections/Features';

export default function App() {
  return (
    <>
      <Header />
      <main
        id='main'
        className='min-h-[70svh]'
      >
        <Hero />
        <Features />
        <Pricing />
        <VideoSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
