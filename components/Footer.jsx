import React from 'react';
import Image from 'next/image';
import { Social, UtilityPages, footerLinks } from '@/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// import { faInstagram } from '@fortawesome/free-solid-svg-icons';

// import { faPinterestP } from '@fortawesome/free-solid-svg-icons';

// import { faTwitter } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <section className="sm:min-h-[70vh] lg:min-h-[100vh] w-full bg-black text-white ">
        <main className="w-[95%] mx-auto  p-8 ">
          <h3 className="text-[24px] lg:text-[120px]">
            Looking to buy or sell the property? Homez is here for you!
          </h3>
          <article className="flex justify-end py-24  lg:text-[4vh]  ">
            <div className="w-[90%] sm:w-[40%] lg:w-[35%]  p-2 lg:p-8 ">
              <div className="flex justify-center bg-white text-black p-4 lg:py-8 lg:px-8 my-8 w-full text-sm lg:text-4xl">
                <p>Call Us: +44 (445) 578 996</p>
              </div>
              <p className="flex justify-end  underline">example@gmail.com</p>
            </div>
          </article>
        </main>
      </section>
      <section className="lg:min-h-[100vh] w-full   flex flex-col gap-4  bg-black text-white  w-[95%] mx-auto">
        <main className="lg:p-24 space-y-[30px] lg:space-y-[50px] text-sm lg:text-4xl p-8 border-[2px] border-white">
          <article className="flex flex-col gap-4 ">
            <div className="mb-4">
              <Image
                src="/assets/images/homez-light.svg"
                alt="homez"
                width={200}
                height={200}
              />
            </div>
            <p className="">
              {' '}
              Fulfilled direction use continual set him propriety continued. Saw
              met applauded favorite deficient engrossed concealed and her.
              Concluded boy perpetual old supposing. Farther related bed and
              passage comfort civilly.
            </p>
          </article>
          <div className="flex gap-4 lg:gap-12">
            <FontAwesomeIcon icon={faFacebook} />{' '}
            <FontAwesomeIcon icon={faInstagram} />{' '}
            <FontAwesomeIcon icon={faPinterest} />{' '}
            <FontAwesomeIcon icon={faTwitter} />{' '}
          </div>
          <p className="">
            {' '}
            Designed by <span className="underline">Webestica</span>, Powered by{' '}
            <span className="underline">Webflow</span>
          </p>
          {footerLinks.map((link) => (
            <article className="w-full  gap-16">
              <h3 className="font-medium text-xl lg:text-[4vh] ">Pages </h3>
              <div className=" w-full md:flex gap-48 ">
                <div className="md:w-[50%]   ">
                  {link.link1.map((item) => (
                    <p className="my-8">{item.title}</p>
                  ))}
                </div>

                <div className="w-[50%]">
                  {link.link2.map((item) => (
                    <p className="my-8 ">{item.title}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <article className=" w-full md:flex md:gap-48">
            {UtilityPages.map((link) => (
              <div className="md:w-[50%]">
                <p className="font-medium text-xl lg:text-[4vh] mb-8 ">
                  {link.title}
                </p>
                <p className="my-4">Style Guide</p>
                <p className="my-4">Instructions</p>
                <p className="my-4">Licenses</p>
                <p className="my-4">Change log</p>
                <p className="my-4">Error 404</p>
                <p className="my-4">Password</p>
              </div>
            ))}

            <div className="md:w-[50%]">
              <div>
                <h3 className="font-medium text-xl lg:text-[4vh] mb-8">
                  Subscribe to our newsletter
                </h3>
                <p className="my-8">
                  Meant balls it if up doubt small purse. Required his you put
                  the outlived answered position.
                </p>
              </div>
              <div className="flex items-center justify-between  border-white border-2 my-4 w-full md:w-[100%]">
                <label className="text-black-900 py-2 px-4">Your Email</label>
                <button className="p-4 bg-white text-black w-[30%] hover:bg-black text-white hover:text-white hover:border-[2px] hover:border-white">
                  <p> Submit </p>
                </button>
              </div>
            </div>
          </article>
        </main>
      </section>
    </footer>
  );
};

export default Footer;
