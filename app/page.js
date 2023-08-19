import Image from 'next/image';
import '../styles/globals.css';

import React from 'react';
import Hero from '@/components/Hero';
import Section2 from '@/components/Section2';
import Footer from '@/components/Footer';
import Towns from '@/components/Towns';
import Investor from '@/components/Investor';

import Rentals from '@/components/Rentals';
import Houses from '@/components/Houses';

const Home = () => {
  return (
    <>
      <div className=" mt-8 w-full">
        <main className=" p-8 flex flex-wrap  justify-between text-2xl md:text-8xl w-full relative">
          <div className="my-2">
            <h1 className="text-black-900 ">
              Easiest way to find <br />
            </h1>
            <div className="flex items-center my-2 md:my-0 md:gap-8">
              <h1 className="text-black-900  mr-4"> your </h1>
              <div className=" inline-block relative w-16 md:w-48 flex flex-1">
                <img
                  className=" absolute top-[-20px] right-0"
                  src="/assets/images/house1.PNG"
                  alt="house1"
                />
              </div>
              <h1 className="text-black-900  mr-4"> dream </h1>
            </div>
            <h1 className="text-black-900 ">
              place <br />
            </h1>
          </div>
          <div className=" flex ">
            <div className="flex justify-end items-end md:w-full md:home_double">
              <Image
                src="/assets/images/homeDouble.PNG"
                alt="home_double"
                width={300}
                height={300}
              />
            </div>
          </div>
        </main>
        <Hero />
        <Section2 />
        <Rentals />
        <Houses />
        <Investor />
        <Towns />

        <Footer />
      </div>
    </>
  );
};

export default Home;
