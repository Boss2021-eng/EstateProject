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
    <section className="lg:min-h-[100vh] w-[95%] mx-auto  flex flex-col flex-wrap items-center justify-center gap-16 mt-24 p-8  lg:text-[5vh] mb-24 ">
      <h3 className=" font-medium text-center text-[50px] lg:text-[8vh] myColour">
        Our Investors and Business Partners Are Our Strength
      </h3>
      <motion.div
        className="flex gap-8 flex-wrap items-center h-[15vh]  "
        animate={{ x: [-500, 0, 0, 500, 0, -500] }}
        transition={{ repeat: Infinity, duration: 10, delay: 5 }}
      >
        {things.map((item) => (
          <div key={item.name} className="">
            <Image src={item.imgUrl} alt={item.name} width={200} height={200} />
          </div>
        ))}
      </motion.div>
      <article className="w-[95%]  mx-auto lg:h-[80vh] flex flex-col gap-8 items-center   flex-wrap justify-center text-md lg:text-[5vh] ">
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
