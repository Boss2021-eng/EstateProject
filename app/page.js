import Image from 'next/image';
import '../styles/globals.css';

import React from 'react';
import Hero from '@/components/Hero';

import Footer from '@/components/Footer';
import Towns from '@/components/Towns';
import Investor from '@/components/Investor';

import Rentals from '@/components/Rentals';
import Houses from '@/components/Houses';
import Main from '@/components/Main';
import About from '@/components/About';

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <Main />
      <Hero />
      <About />
      <Rentals />
      <Houses />
      <Investor />
      <Towns />

      <Footer />
    </div>
  );
};

export default Home;
