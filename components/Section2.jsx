import React from 'react';
import Image from 'next/image';

import { Planning } from '@/utils';
Planning;
const { things } = Planning;

const Section2 = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-4 md:mt-16 p-4 md:p-8  w-full text-wrap">
      <div className="w-[75%] md:w-[50%] object-contain">
        <img
          className=" w-[700px]"
          src="/assets/images/house2.PNG"
          alt="house2"
        />
      </div>
      <h1 className="text-black-900 text-2xl w-[95%] md:w-full md:text-6xl mt-4 mb-24">
        Our objective is to establish micro-communities that not only serve
        their residents but also contribute positively to the larger community.
        We believe that every space holds potential, and we endeavor to
        transform these spaces into vibrant and sustainable neighborhoods. Our
        approach to land planning.
      </h1>
      <div className="">
        <p className=" text-black-700 my-4 text-2xl ">From search to buy</p>
      </div>

      <div className="md:flex items-start  w-[100%]">
        {things.map((item) => (
          <div
            key={item.name}
            className="flex items-center border-black border-b-2 p-2 pb-4 mb-4 md:border-none w-[90%] md:w-full"
          >
            <Image src={item.imgUrl} width={50} height={50} />
            <p className="text-2xl">{item.name}</p>
            <Image
              src={'/assets/images/Line.PNG'}
              width={150}
              height={20}
              className="bg-red-500 hidden md:flex md:items-center "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
