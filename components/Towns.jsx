import React from 'react';
import Image from 'next/image';

import { AvailableImages } from '@/utils';
const { places } = AvailableImages;

const Towns = () => {
  return (
    <section className="flex flex-col items-center justify-center text-2xl my-24">
      <h1 className="flex text-4xl md:text-7xl text-center my-16 leading-24">
        Our Availability in <br />
        These Towns
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {places.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center"
          >
            <div>
              <Image
                src={item.imgUrl}
                alt={item.name}
                width={200}
                height={200}
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Towns;
