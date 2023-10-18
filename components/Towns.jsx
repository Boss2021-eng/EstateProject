import React from 'react';
import Image from 'next/image';

import { AvailableImages } from '@/utils';
const { places } = AvailableImages;

const Towns = () => {
  return (
    <section className="min-h-[100vh] w-[95%]  mx-auto flex flex-col items-center justify-center lg:text-[40px] mb-12">
      <main>
        <h1 className="flex font-bold text-[80px] lg:text-[200px] text-center my-16 leading-24 ">
          Our Availability in These Towns
        </h1>
        <article className="grid grid-cols-3 p-2 place-items-center gap-2 ">
          {places.map((item) => (
            <figure key={item.name} className="col-span-1 ">
              <Image
                src={item.imgUrl}
                alt={item.name}
                width={500}
                height={400}
                className="rounded-full hover:scale-105 "
              />
              <figcaption className="text-center ">{item.name}</figcaption>
            </figure>
          ))}
        </article>
      </main>
    </section>
  );
};

export default Towns;
