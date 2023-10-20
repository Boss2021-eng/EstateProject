import React from 'react';

import { HousesData } from '@/utils';
import House from './House';
const { houses } = HousesData;

const Houses = () => {
  return (
    <div className="">
      <header className=" lg:min-h-[100vh] flex justify-center items-center ">
        <h1 className="  mx-auto text-center  text-[40px] my-8 lg:text-[130px] font-medium">
          Available Properties for Sell and Rent
        </h1>
      </header>

      <section className=" w-[95%] mx-auto text-4xl flex flex-col items-center ">
        {/* <h3 className="text-2xl md:text-[200px]   md:mb-16 md:w-[90%] bg-red-500">
          Available Properties for Sell and Rent
        </h3> */}

        <main className="flex flex-col flex-wrap items-center justify-center gap-8 p-2 md:p-8">
          <figure className="flex justify-center gap-8 flex-wrap ">
            {houses.map((house) => (
              <House house={house} />
            ))}
          </figure>
          <div
            className="text-sm w-[100px] md:w-[300px] bg-black text-white md:button lg:mb-4 
          p-2 md:py-8 px-4
          hover:bg-white text-white hover:text-black hover:border-[2px] hover:border-black"
          >
            <button className="w-full text-sm md:text-3xl">
              View Other Properties
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Houses;
