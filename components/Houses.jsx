import React from 'react';

import { HousesData } from '@/utils';
import House from './House';
const { houses } = HousesData;

const Houses = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center gap-8 p-2 md:p-8 w-full">
      <h1 className="text-2xl md:text-7xl text-center  md:mb-16 md:w-[90%]">
        Available Properties for <br />
        Sell and Rent
      </h1>
      <div className="flex justify-center gap-8 flex-wrap ">
        {houses.map((house) => (
          <House house={house} />
        ))}
      </div>
      <div className="bg-black text-white  text-xl button_sm md:button ">
        <button>View Other Properties</button>
      </div>
    </section>
  );
};

export default Houses;
