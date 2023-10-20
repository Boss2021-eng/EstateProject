'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Div = ({ index, children }) => {
  return (
    <motion.div
      initial={variants.hidden}
      whileInView={variants.visible}
      viewport={{ once: true }}
      transition={{ type: 'spring', bounce: 0.4, duration: 1, delay: index }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="sm:min-h-[100vh]  w-[95%] mx-auto   lg:text-[40px] flex items-end">
      <main className="gap-4 min-h-[90vh] w-full ">
        <article className=" flex flex-col justify-between gap-[20px] lg:text-2xl">
          <p className="">
            Supposing so be resolving breakfast am or perfectly. It drew a hill
            from me. Valley by oh twenty direct me so. Departure defective
            arranging rapturous did believe him all had supported. Family months
            lasted simple set nature vulgar him. Picture for attempt joy.
          </p>
          <div className="flex  items-center justify-between  border-[3px] border-black text-16px lg:text-[40px] px-[20px] py-[10px] lg:p-[20px]">
            <label className="">Enter Keyword</label>
            <button className="px-8 py-4 md:px-16 md:py-8  text-white">
              Search
            </button>
          </div>

          <div className="flex items-center gap-4 ">
            <div className="relative ">
              <FontAwesomeIcon icon={faGlobe} className="" />
              {/* <FontAwesomeIcon
                icon={faLocationDot}
                className="h-[20px] ml-[-15px] z-20 border-[1px] text-white "
              /> */}
            </div>

            <p className="my-4">Globally integrated real estate platform</p>
          </div>

          <div className=" w-full lg:w-[70%] my-8  grid grid-cols-2 place-items-center gap-8 ">
            <div className="col-span-1 flex object-contain grid grid-cols-3 place-items-center ">
              <img
                src={'/assets/images/pictures/picture1.jpg'}
                alt="ratings"
                className=" rounded-full col-span-1"
              />

              <img
                src={'/assets/images/pictures/picture2.jpg'}
                alt="ratings"
                className=" rounded-full col-span-1"
              />

              <img
                src={'/assets/images/pictures/picture3.jpg'}
                alt="ratings"
                className="rounded-full col-span-1"
              />
            </div>

            <div className="col-span-1 ">
              <div className=" flex items-center gap-2 font-bold">
                <p>Rating</p>
                <Image
                  src={'/assets/images/Star.PNG'}
                  width={40}
                  height={40}
                  className=""
                />
                <p>5.0</p>
              </div>
              <p className="">Trusted by clients worldwide</p>
            </div>
          </div>
        </article>

        <article className="w-full lg:h-[90vh] object-cover">
          <Image
            src={'/assets/images/hero-image.jpg'}
            width={770}
            height={800}
            className=" flex items-center  object-cover w-full h-full"
          />
        </article>

        <article className="w-full grid grid-cols-3 justify-between sm:gap-[50px] lg:min-h-[300px] ">
          <Div index={0} className="">
            <div className="w-full h-[200px] p-2 sm:p-8  ">
              <h1 className="inline-block  text-4xl  lg:text-8xl font-bold ">
                99%
              </h1>
              <p className="text-3xl">Customer Satisfaction</p>
            </div>
          </Div>

          <Div index={1} className=" ">
            <div className="w-full h-[200px] p-2 sm:p-8 ">
              <h1 className=" inline-block text-4xl  lg:text-8xl font-bold  ">
                56+
              </h1>
              <p className="flex justify-start text-3xl">Experience agents</p>
            </div>
          </Div>

          <Div
            index={2}
            className=" w-[150px]  flex flex-col items-center w-full h-[200px]  sm:p-8 lg:items-end justify-between py-4  gap-8 md:col-span-1 "
          >
            <div className="w-full  h-[200px]  p-2 sm:p-8 ">
              <h1 className="inline-block text-4xl  lg:text-8xl font-bold  ">
                249
              </h1>
              <p className="flex justify-start text-3xl">Total Property Sell</p>
            </div>
          </Div>
        </article>
      </main>
    </section>
  );
};

export default Hero;
