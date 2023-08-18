import React from 'react';
import Image from 'next/image';

import { InvestorImages } from '@/utils';
const { things } = InvestorImages;

const Investor = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center gap-16 mt-24 p-8">
      <h1 className="text-4xl md:text-5xl text-center">
        Our Investors and Business Partners Are Our Strength
      </h1>
      <div className="flex flex-wrap items-center w-[80%] md:w-full">
        {things.map((item) => (
          <div key={item.name}>
            <Image src={item.imgUrl} alt={item.name} width={200} height={200} />
          </div>
        ))}
      </div>
      <div className="w-[60%] flex flex-col gap-2 items-center flex-wrap text-3xl">
        <p className="my-16 ">
          Fulfilled direction use continual set him propriety continued. Saw met
          applauded favorite deficient engrossed concealed and her. Concluded
          boy perpetual old supposing. Farther related bed and passage comfort
          civilly. Dash woods see frankness objection abilities hire alteration
          it favorable appearance up.
        </p>

        <p>Larry Lawson, Agent at Squire</p>

        <div>
          <Image
            src="/assets/images/stars.PNG"
            alt="stars"
            width={200}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Investor;
