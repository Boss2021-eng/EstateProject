'use client';
import React from 'react';

const Rentals = () => {
  return (
    <section className="min-h-[100vh] lg:h-[900px] w-[95%] mx-auto flex items-center justify-center  ">
      <main className=" lg:w-full lg:w-[1050px] lg:h-[900px] lg:mx-auto md:grid md:grid-cols-3  gap-[0px] justify-center items-center  text-[16px]  lg:text-4xl px-[30px] lg:px-[0px] relative text-wrap ">
        <article className="col-span-1    ">
          <div className=" w-full flex flex-col items-center justify-center text-center text-white  ">
            <div className="w-[200px] lg:min-w-[350px] h-[250px] lg:min-h-[450px] bg-black  rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4  py-4 lg:py-8   border-[2px] lg:border-[5px] border-black">
              <h4>25 Years</h4>
              <p>
                <span>Of successful experience in trading</span>
              </p>
            </div>
          </div>
        </article>
        {/* <article className="col-span-1  border-[5px] border-black lg:relative lg:left-[25%] flex-col items-center justify-center text-center border-[5px] border-black ">
          <div className=" w-[200px] min-h-[250px] md:w-[80%]  md:h-[350px]   rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4  py-4 lg:py-8  border-[2px] lg:border-[5px] border-black ">
            <h4>Rent</h4>
            <p>
              <span>Supposing so be resolving breakfast am or perfectly</span>
            </p>
          </div>
        </article> */}
        <article className="col-span-1 ">
          <div className=" flex flex-col items-center justify-center text-center">
            <div className=" w-[200px] lg:min-w-[350px] h-[250px] lg:min-h-[450px] flex flex-col items-center justify-center px-2 lg:px-4  py-4 lg:py-8  border-[2px] rounded-[50%] lg:border-[5px] border-black ">
              <h4>Rent</h4>
              <p>
                <span>Supposing so be resolving breakfast am or perfectly</span>
              </p>
            </div>
          </div>
        </article>
        <article className="col-span-1  ">
          <div className=" flex flex-col items-center justify-center   text-center   ">
            <div className="w-[200px] lg:min-w-[350px] h-[250px] lg:min-h-[450px]    rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4 xl:px-8 py-4 lg:py-8  border-[2px] lg:border-[5px] border-black">
              <h4>Sell</h4>
              <p>
                <span>Speedily say has suitable disposable add bay</span>
              </p>
            </div>
          </div>
        </article>
        <article className="col-start-2 col-span-1">
          <div className="w-full h-full flex flex-col items-center justify-center   text-center   ">
            <div className=" w-[200px] lg:min-w-[350px] h-[250px] lg:min-h-[450px]  rounded-[50%] flex flex-col items-center justify-center px-2 lg:px-4 py-4 lg:py-8  border-[2px] lg:border-[5px] border-black ">
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
