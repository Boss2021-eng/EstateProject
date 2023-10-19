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
    <section className="min-h-[100vh]  w-[95%] mx-auto   lg:text-[40px] flex items-end">
      <main className="gap-4 min-h-[90vh] w-full ">
        <article className=" flex flex-col justify-between gap-[20px] lg:text-[4vh]">
          <p className="">
            Supposing so be resolving breakfast am or perfectly. It drew a hill
            from me. Valley by oh twenty direct me so. Departure defective
            arranging rapturous did believe him all had supported. Family months
            lasted simple set nature vulgar him. Picture for attempt joy.
          </p>
          <div className="flex  items-center justify-between  border-[3px] border-black text-16px lg:text-[40px] px-[20px] py-[10px] lg:p-[20px]">
            <label className="">Enter Keyword</label>
            <button className="px-8 py-4 md:px-16 md:py-8 bg-black text-white">
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

          <div className=" w-[80%] lg:w-[60%] my-8  grid grid-cols-2 gap-8 ">
            <div className="col-span-1 flex object-contain grid grid-cols-3">
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

            <div className="col-span-1">
              <div className=" flex items-center my-4 font-bold">
                <p>Rating</p>
                <Image
                  src={'/assets/images/Star.PNG'}
                  width={40}
                  height={40}
                  className=""
                />
                <p>5.0</p>
              </div>
              <p>Trusted by clients worldwide</p>
            </div>
          </div>
        </article>

        <article className=" h-[90vh] object-cover">
          <Image
            src={'/assets/images/hero-image.jpg'}
            width={770}
            height={800}
            className="bg-red-500 flex items-center object-cover w-full h-full"
          />
        </article>

        <article className="  grid grid-cols-3 gap-[100px]">
          <Div
            index={0}
            className=" md:min-h-[150px] flex flex-col items-center lg:items-end justify-between py-4  gap-8 md:col-span-1"
          >
            <div className="lg:w-[75%] p-4">
              <h1 className=" flex justify-start text-[60px] lg:text-[80px]  font-bold ">
                99%
              </h1>
              <p className="flex justify-start ">Customer Satisfaction</p>
            </div>
          </Div>

          <Div
            index={1}
            className=" min-h-[100px] lg:min-h-[150px] flex flex-col items-center lg:items-end justify-between  py-4  gap-8 md:col-span-1"
          >
            <div className="w-[75%] p-4">
              <h1 className=" flex justify-start text-[80px] lg:text-[100px]  font-bold ">
                56+
              </h1>
              <p className="flex justify-start ">Experience agents</p>
            </div>
          </Div>

          <Div
            index={2}
            className=" w-[150px] md:min-h-[150px] flex flex-col items-center lg:items-end justify-between py-4  gap-8 md:col-span-1 bg-blue-300"
          >
            <div className="w-[75%] p-4">
              <h1 className=" flex justify-start text-[80px] lg:text-[100px]  font-bold ">
                249
              </h1>
              <p className="flex justify-start ">Total Property Sell</p>
            </div>
          </Div>
        </article>
      </main>
    </section>
  );
};

export default Hero;
