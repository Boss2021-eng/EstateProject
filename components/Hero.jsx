import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="md:flex  mt-48 md:my-16 items-center justify-between  w-full gap-4 text-xl">
      <div className="w-[100%] md:w-[30%] ">
        <p>
          Supposing so be resolving breakfast am or perfectly. It drew a hill
          from me. Valley by oh twenty direct me so. Departure defective
          arranging rapturous did believe him all had supported. Family months
          lasted simple set nature vulgar him. Picture for attempt joy.
        </p>
        <div className="flex  items-center justify-between p-4 border-black border-2 my-4 ">
          <label className="text-xl text-black-900">Enter Keyword</label>
          <button className="p-4 bg-black text-white">
            <p> Search </p>
          </button>
        </div>
        <p className="my-4">Globally integrated real estate platform</p>

        <div className=" flex my-8 ">
          <div>
            <Image
              src={'/assets/images/Rating1.PNG'}
              width={250}
              height={200}
              className="bg-red-500 flex items-center"
            />
            <div className="flex gap-2 text-black-700 my-4 ">
              <p>Rating</p>
              <Image
                src={'/assets/images/Star.PNG'}
                width={25}
                height={25}
                className="bg-red-500 flex items-center"
              />
              <p>5.0</p>
            </div>
            <p className="text-black-300 my-4">Trusted by a client worldwide</p>
          </div>
        </div>
      </div>
      <div className="flex my-8 w-[100%] md:w-[30%]">
        <Image
          src={'/assets/images/Orchid.PNG'}
          width={700}
          height={500}
          className="bg-red-500 flex items-center"
        />
      </div>
      <div className=" flex flex-wrap gap-4  md:flex-col  items-end ">
        <div>
          <h1 className="text-7xl flex justify-end my-8">99%</h1>
          <p className="flex justify-end">Customer Satisfaction</p>
        </div>

        <div>
          <h1 className="text-7xl flex justify-end my-8">56+</h1>
          <p className="flex justify-end">Experience agents</p>
        </div>

        <div>
          <h1 className="text-7xl flex justify-end my-8">249</h1>
          <p className="flex justify-end">Total Property Sale</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
