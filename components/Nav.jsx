'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleToggle = () => {
    setToggleDropDown((prev) => !prev);
  };
  // console.log(toggleDropDown);
  return (
    <nav className="py-8 ">
      <section className="md:p-0 flex flex-col items-center justify-between w-[95%] mx-auto  ">
        <main className="w-full">
          {/* desktop screen  */}
          <article className="w-full hidden lg:flex md:text-xl xl:text-4xl  whitespace-nowrap">
            <div className=" w-full flex justify-between md:pl-0 md:pr-4 items-center">
              <Image
                src="/assets/images/homez_light.svg"
                alt="homez"
                width={200}
                height={200}
                className="w-[20%] md:w-[15%] "
              />

              <div className="flex justify-between items-center  md:w-[80%] lg:w-[65%]">
                <div className="hidden md:flex  justify-between w-[65%] ">
                  <p className="border-b-[5px] border-pink-500">Home</p>
                  <p>About</p>
                  <p>Properties</p>
                  <p>Contact Us</p>
                </div>

                <button className="hidden md:flex md:bg-black hover:bg-white text-white hover:text-black hover:border-[2px] hover:border-black md:py-2 md:px-4  lg:py-4 lg:px-8 w-[30%] text-center flex justify-center ">
                  Add Property
                </button>
              </div>
            </div>
          </article>

          {/* mobile view */}
          <article className="flex lg:hidden items-center justify-between w-full text-sm whitespace-nowrap ">
            <div className="flex items-center w-[50px] lg:w-[200px]">
              <Image
                src="/assets/images/nav_logo.PNG"
                alt="nav_logo"
                width={100}
                height={120}
                className=""
              />
              <p className="text-black font-semibold text-[60px]">Homez</p>
            </div>

            <div className="flex items-center gap-4   ">
              <button className="hidden  lg:hidden bg-black text-white text-4xl w-[300px] h-[70px] ">
                Add Property
              </button>
              <button
                className=" bg-black text-white py-4 px-4 lg:py-8 lg:px-8"
                onClick={handleToggle}
              >
                {toggleDropDown ? (
                  <FontAwesomeIcon icon={faXmark} className="w-8 h-8" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-8 h-8 " />
                )}
              </button>
            </div>
          </article>
        </main>

        <div className="w-full lg:hidden">
          {toggleDropDown ? (
            <div className="flex flex-col p-8 gap-2 bg-black text-white z-index-10 text-md">
              <p>Home</p>
              <p>About</p>
              <p>Properties</p>
              <p>Contact Us</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Nav;
