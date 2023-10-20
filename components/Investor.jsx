'use client';
// import '@/styles/custom.css';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { InvestorImages } from '@/utils';
import { commentStore } from '@/utils';

import { motion } from 'framer-motion';
const { things } = InvestorImages;

const Investor = () => {
  const [index, setIndex] = useState(1);
  const comment = commentStore[index];

  const handleNext = () => {
    const count = (index + 1) % commentStore.length;
    setIndex(count);
  };

  const startCommentSlider = () => {
    setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    startCommentSlider();
  }, []);

  // useEffect(() => {
  //   startCommentSlider();
  // }, [comment]);

  // console.log(comment);

  return (
    <section className="sm:min-h-[100vh] w-[95%] mx-auto  flex flex-col flex-wrap items-center lg:justify-center gap-16 lg:mt-24 p-8  lg:text-[5vh] md:mb-24 ">
      <h3 className=" font-medium text-center text-[30px] sm:text-[50px] lg:text-[8vh] myColour">
        Our Investors and Business Partners Are Our Strength
      </h3>
      <motion.div
        className="hidden sm:flex gap-8 flex-wrap items-center h-[15vh]  "
        animate={{ x: [-500, 0, 0, 500, 0, -500] }}
        transition={{ repeat: Infinity, duration: 10, delay: 5 }}
      >
        {things.map((item) => (
          <div key={item.name} className="flex">
            <Image src={item.imgUrl} alt={item.name} width={200} height={200} />
          </div>
        ))}
      </motion.div>
      {things.map((item) => (
        <div key={item.name} className="flex md:hidden flex-wrap">
          <Image src={item.imgUrl} alt={item.name} width={200} height={200} />
        </div>
      ))}
      <article className="sm:mt-[10px] w-[95%]  mx-auto lg:h-[80vh] flex flex-col gap-8 items-center   flex-wrap justify-center text-md lg:text-[5vh] ">
        <section className=" flex flex-col items-center justify-between lg:h-[80vh]">
          <p className="my-16 text-center ">{comment.comment}</p>
          <div className="flex flex-col items-center">
            <p className="text-center">{comment.commenter}</p>
            <div className=" flex gap-2">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </section>
      </article>

      {/* <article>
        <div>
          <p>{comment.comment}</p>
          <p>{comment.commenter}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      </article> */}
    </section>
  );
};

export default Investor;
