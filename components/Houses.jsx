import React from 'react';

import { HousesData } from '@/utils';
import House from './House';
const { houses } = HousesData;

const Houses = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center gap-8">
      <h1 className="text-4xl md:text-7xl text-center  mb-16 ">
        Available Properties for <br />
        Sell and Rent
      </h1>
      <div className="flex gap-8 flex-wrap ">
        {houses.map((house) => (
          <House house={house} />
        ))}
      </div>
      <div className="bg-black text-white mx-8 py-4 px-16 text-xl">
        <button>View Other Properties</button>
      </div>
    </section>
  );
};

export default Houses;
