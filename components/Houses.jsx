import React from 'react';

import { HousesData } from '@/utils';
import House from './House';
const { houses } = HousesData;

const Houses = () => {
  return (
    <div className="">
      <section className=" min-h-[100vh] w-[95%] mx-auto text-[5vh] flex flex-col items-center center">
        {/* <h3 className="text-2xl md:text-[200px]   md:mb-16 md:w-[90%] bg-red-500">
          Available Properties for Sell and Rent
        </h3> */}
        <header className=" lg:min-h-[100vh] w-[70%] flex justify-center items-center my-auto ">
          <h3 className="  mx-auto text-center  text-[5vw] my-8 lg:text-[8vw] font-medium">
            Available Properties for Sell and Rent
          </h3>
        </header>

        <main className="flex flex-col flex-wrap items-center justify-center gap-8 p-2 md:p-8">
          <figure className="flex justify-center gap-8 flex-wrap ">
            {houses.map((house) => (
              <House house={house} />
            ))}
          </figure>
          <div className="text-sm w-[100px] lg:w-[200px] bg-black text-white md:button lg:mb-4 hover:bg-white text-white hover:text-black hover:border-[2px] hover:border-black">
            <button className="">View Other Properties</button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Houses;
