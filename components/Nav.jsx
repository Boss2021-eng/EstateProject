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

  return (
    <>
      <nav className="flex justify-between w-full">
        {/* desktop screen  */}

        <div className="w-full hidden md:flex">
          <div className="flex justify-between  w-full items-center px-8 py-4 text-xl md:text-[20px] ">
            <div>
              <Image
                src="/assets/images/nav.PNG"
                alt="homez"
                width={200}
                height={200}
              />
            </div>
            <div className=" flex justify-between  items-center gap-8 ">
              <div className="flex gap-8">
                <p>Home</p>
                <p>About</p>
                <p>Properties</p>
                <p>Contact Us</p>
              </div>

              <div className="bg-black text-white mx-8 py-2 px-8">
                <button>Add Property</button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile screen */}
        <div className=" flex md:hidden items-center justify-between w-full text-sm">
          <div className="mr-8">
            <Image
              src="/assets/images/nav.PNG"
              alt="homez"
              width={150}
              height={200}
            />
          </div>

          <div className="flex items-center gap-4  h-[60px] ">
            <div className="hidden bg-black text-white mx-2 py-2 px-4 invisible xs:visible">
              <button>Add Property</button>
            </div>
            <button
              className=" bg-black text-white h-full "
              onClick={handleToggle}
            >
              {toggleDropDown ? (
                <FontAwesomeIcon icon={faXmark} className="w-16 h-8" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-16 h-8 " />
              )}
            </button>
          </div>
        </div>
      </nav>
      {toggleDropDown ? (
        <div className="flex flex-col p-2 gap-2 bg-black text-white z-index-10 text-md">
          <p>Home</p>
          <p>About</p>
          <p>Properties</p>
          <p>Contact Us</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Nav;
