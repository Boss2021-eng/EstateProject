'use client';
import React from 'react';

const Rentals = () => {
  return (
    <section className="min-h-[50vh] lg:min-h-[100vh] w-[95%] mx-auto flex items-center justify-center  ">
      <main className=" w-[95%] min-h-[50vh] lg:min-h-[100vh] grid grid-cols-3 gap-0 place-items-center  text-[16px] lg:text-[40px] px-[30px] lg:px-[150px] relative text-wrap">
        <article className="col-span-1   ">
          <div className=" flex flex-col items-center justify-center text-center text-white  ">
            <div className="min-w-[200px] min-h-[200px] lg:w-[500px] lg:h-[500px] bg-black  rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4 py-4 lg:py-8 border-[2px] lg:border-[5px] border-black">
              <h4>25 Years</h4>
              <p>
                <span>Of successful experience in trading</span>
              </p>
            </div>
          </div>
        </article>
        <article className="col-span-1  ">
          <div className=" flex flex-col items-center justify-center text-center ">
            <div className=" min-w-[200px] min-h-[200px] lg:w-[500px] lg:h-[500px] rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4 py-4 lg:py-8  border-[2px] lg:border-[5px] border-black ">
              <h4>Rent</h4>
              <p>
                <span>Supposing so be resolving breakfast am or perfectly</span>
              </p>
            </div>
          </div>
        </article>
        <article className="col-span-1  ">
          <div className=" flex flex-col items-center justify-center   text-center   ">
            <div className=" min-w-[200px] min-h-[200px] lg:w-[500px] lg:h-[500px] rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4 py-4 lg:py-8  border-[2px] lg:border-[5px] border-black">
              <h4>Sell</h4>
              <p>
                <span>Speedily say has suitable disposable add bay</span>
              </p>
            </div>
          </div>
        </article>
        <article className="col-start-2 col-span-1 ">
          <div className="w-full h-full flex flex-col items-center justify-center   text-center   ">
            <div className=" min-w-[200px] min-h-[200px] lg:w-[500px] lg:h-[500px] rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4 py-4 lg:py-8  border-[2px] lg:border-[5px] border-black ">
              <h4>Buy</h4>
              <p>
                <span>
                  Passage its ten led removal Preference any astonished
                </span>
              </p>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Rentals;
