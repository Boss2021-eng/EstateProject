import React from 'react';

import { HousesData } from '@/utils';
import House from './House';
const { houses } = HousesData;

const Houses = () => {
  return (
    <div className="">
      <section className=" min-h-[100vh] w-[95%] mx-auto text-[20px] lg:text-[40px] flex flex-col gap-4 items-center center">
        {/* <h3 className="text-2xl md:text-[200px]   md:mb-16 md:w-[90%] bg-red-500">
          Available Properties for Sell and Rent
        </h3> */}
        <header className=" lg:min-h-[100vh] w-[70%] flex justify-center items-center my-auto ">
          <h3 className="  mx-auto text-center  text-[7vw] my-8 lg:text-[8vw] font-medium">
            Available Properties for Sell and Rent
          </h3>
        </header>

        <main className="flex flex-col flex-wrap items-center justify-center gap-8 p-2 md:p-8">
          <figure className="flex justify-center gap-16 lg:gap-8 flex-wrap ">
            {houses.map((house) => (
              <House house={house} />
            ))}
          </figure>
          <div className="bg-black text-white   button_sm md:button ">
            <button>View Other Properties</button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Houses;
