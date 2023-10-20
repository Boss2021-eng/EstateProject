import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCircleArrowUp,
  faHandshake,
  faKey,
  faHouse,
  faCarSide,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

import { Planning } from '@/utils';
Planning;
const { things } = Planning;

const HorizontalLineSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="3">
    <line x1="0" y1="5" x2="100" y2="5" stroke="black" stroke-width="10" />
  </svg>
);

const About = () => {
  return (
    <section className=" sm:min-h-[100vh] w-[95%] mx-auto flex flex-col items-center justify-center mt-4  text-wrap">
      <main className=" ">
        <article className="   flex justify-center">
          <Image
            src={'/assets/images/about-image.jpg'}
            width={1800}
            height={1900}
            className=""
          />
        </article>
        <h1 className="text-black-900 text-sm font-medium lg:text-[100px] w-[95%] md:w-full md:text-6xl mt-4 mb-24">
          Our objective is to establish micro-communities that not only serve
          their residents but also contribute positively to the larger
          community. We believe that every space holds potential, and we
          endeavor to transform these spaces into vibrant and sustainable
          neighborhoods. Our approach to land planning.
        </h1>
        <div className="mb-8">
          <p className=" text-black-700 my-4 lg:text-[40px] ">
            From search to buy
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center  gap-[50px] lg:text-4xl px-[10px]">
          {/* {things.map((item) => (
            <div
              key={item.name}
              className="flex items-center p-2 pb-4 mb-4 w-[250px] h-[80px]"
            >
              <Image src={item.imgUrl} width={50} height={50} />
              <p className="lg:text-4xl">{item.name}</p>
              <Image
                src={'/assets/images/Line.PNG'}
                width={150}
                height={20}
                className="bg-red-500 hidden md:flex md:items-center "
              />
            </div>
          ))} */}
          <div className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faSearch} />
            <p> Search</p>
            <HorizontalLineSVG />
          </div>

          <div className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faHouse} />
            <p> Mortgage</p>
            <HorizontalLineSVG />
          </div>

          <div className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faCarSide} />
            <p> Tour </p>
            <HorizontalLineSVG />
          </div>

          <div className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faHandshake} />
            <p> Negotiate </p>
            <HorizontalLineSVG />
          </div>

          <div className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faCircleCheck} />
            <p> Approval </p>
            <HorizontalLineSVG />
          </div>

          <div className="flex items-center gap-4 ">
            <FontAwesomeIcon icon={faKey} />
            <p> Buy</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
