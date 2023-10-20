'use client';
import React from 'react';

const Rentals = () => {
  return (
    <section className="min-h-[100vh]  lg:h-[900px] xl:h-[1000px] w-[95%] mx-auto flex items-center justify-center  ">
      <main className=" lg:w-[1100px] xl:w-[1400px] lg:h-[900px] xl:h-[1000px] lg:mx-auto md:grid md:grid-cols-3  gap-[0px] justify-center items-center  text-[16px]  lg:text-4xl px-[30px] lg:px-[0px] relative text-wrap">
        <div className=" rentals_container ">
          <div className="col-span-1 rentals bg-black text-white">
            <p>25years</p>
            <p className=""> of successful experience in training</p>
          </div>

          <div className="col-span-1 rentals">
            <p>Rent</p>
            <p className="">
              Supposing so be resolving breakfast am or perfectly
            </p>
          </div>

          <div className="col-span-1 rentals">
            <p>Sell</p>
            <p className="">
              Sell Speedily say has suitable disposable add bay
            </p>
          </div>

          <div className="col-start-2 col-span-1 rentals">
            <p>Buy</p>
            <p className="">
              Passage its ten led removal Preference any astonished
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Rentals;
