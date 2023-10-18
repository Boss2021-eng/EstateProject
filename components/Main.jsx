import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <section className="lg:min-h-[80vh]  w-[95%] mx-auto flex items-center justify-center ">
      <main className="flex flex-col items-end text-[60px] md:text-[72px] lg:text-[150px] w-full relative font-medium p-2 md:p-4 ">
        <article className=" flex flex-1 flex-wrap md:flex-row justify-start min-h-[500px]">
          <h1 className="flex items-center flex-wrap gap-8 lg:text-[15vh] ">
            <span>Easiest </span>
            <span>way</span>
            <span>to</span>
            <span>find</span>
            <span className="">your</span>
            <div className="inline-block md:mx-4  w-[300px]">
              <img
                className="relative top-[20px] w-full h-full"
                src="/assets/images/house1.PNG"
                alt="house1"
              />

              {/* <span>dream</span>

              <span>place</span> */}
            </div>
            <span className="">dream</span>
            <span className="">place</span>
          </h1>
        </article>
        <article className=" flex items-center justify-end  lg:w-[50%]  min-h-[300px]  relative">
          {/* <div className="w-full h-[400px]  flex items-end">
            <img
              src="/assets/images/homeDouble.PNG"
              alt="home_double"
              width={300}
              height={500}
              className="w-full "
            />
          </div> */}
          <div className=" w-[40%] z-20">
            <img src="/assets/images/house.jpg" className="rounded-full" />
          </div>

          <div className="  w-[40%] ml-[-150px] bg-black rounded-full">
            <img
              src="/assets/images/properties.png"
              className="rounded-full w-full h-full "
            />
          </div>

          <FontAwesomeIcon
            icon={faArrowRight}
            className=" text-white  w-full  h-[100px] w-[100px] absolute right-[80px] z-20"
          />
        </article>
      </main>
    </section>
  );
};

export default Main;
