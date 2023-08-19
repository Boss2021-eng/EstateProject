'use client';
import React from 'react';

const Rentals = () => {
  return (
    <section className="flex flex-wrap justify-center gap-0.5 md:my-16 md:h-[400px] p-8 md:p-0  ">
      <div className="flex items-start ml-[-15px] ">
        <div className="flex flex-col items-center justify-center   border-black  rentals_sm md:rentals]  rounded-full border-2 text-center text-2xl rentals_sm md:rentals bg-black text-white ">
          <h4>25 Years</h4>
          <p>Of successful experience in trading</p>
        </div>
      </div>
      <div className="flex items-end ml-[-15px]">
        <div className="flex flex-col items-center justify-center   border-black  rentals_sm md:rentals rounded-full border-2 text-center  text-2xl rentals_sm md:rentals  ">
          <h4>25 Years</h4>
          <p>Of successful experience in trading</p>
        </div>
      </div>
      <div className="flex items-start ml-[-15px]">
        <div className="flex flex-col items-center justify-center   border-black rentals_sm md:rentals rounded-full border-2 text-center  text-2xl   ">
          <h4>25 Years</h4>
          <p>Of successful experience in trading</p>
        </div>
      </div>
      <div className="flex items-end ml-[-15px]">
        <div className="flex flex-col items-center justify-center rentals_sm md:rentals  border-black    rounded-full border-2 text-center  text-2xl   ">
          <h4>25 Years</h4>
          <p>Of successful experience in trading</p>
        </div>
      </div>
    </section>
  );
};

export default Rentals;
