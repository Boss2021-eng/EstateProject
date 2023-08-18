import React from 'react';
import Image from 'next/image';
import { Social, UtilityPages, footerLinks } from '@/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faFacebook } from '@fortawesome/free-solid-svg-icons';

// import { faInstagram } from '@fortawesome/free-solid-svg-icons';

// import { faPinterestP } from '@fortawesome/free-solid-svg-icons';

// import { faTwitter } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section className=" flex flex-col gap-4  p-8 bg-black text-white">
      <div className="md:flex items-center justify-between py-24 border-white border-b-2 mb-8">
        <div className="text-4xl md:text-7xl w-[100%] md:w-[70%]">
          <p>
            Looking to buy or sell <br />
            the property? Homez is <br />
            here for you!
          </p>
        </div>
        <div className="justify-center text-2xl  w-full md:w-[30%]">
          <div className="flex justify-center bg-white text-black p-4 my-8 w-full">
            <p>Call Us: +44 (445) 578 996</p>
          </div>
          <p className="flex justify-end text-2xl underline">
            example@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-2xl">
        <div className="mb-4">
          <Image
            src="/assets/images/nav.PNG"
            alt="homez"
            width={200}
            height={200}
          />
        </div>
        <p>
          {' '}
          Fulfilled direction use continual set him propriety continued. Saw met
          applauded favorite deficient engrossed concealed and her. Concluded
          boy perpetual old supposing. Farther related bed and passage comfort
          civilly.
        </p>
      </div>
      <div className="flex">
        {/* {Social.map((item) => (
          <div key={item.name} className="h-[40px]">
            <Image
              src={item.imgUrl}
              alt={item.name}
              width={50}
              height={50}
              className="h-full"
            />
          </div>
        ))} */}
        {/* <FontAwesomeIcon icon={faFacebook} className="bg-green-100" /> */}
      </div>
      <p className="text-2xl">
        {' '}
        Designed by <span className="underline">Webestica</span>, Powered by{' '}
        <span className="underline">Webflow</span>
      </p>
      {footerLinks.map((link) => (
        <div className="text-2xl ">
          <h3 className="text-3xl my-4">{link.title}</h3>
          <div className=" w-full md:flex ">
            <div className=" w-[30%] gap-24 ">
              {link.link1.map((item) => (
                <p className="my-8">{item.title}</p>
              ))}
            </div>

            <div className="gap-24 ">
              {link.link2.map((item) => (
                <p className="my-8">{item.title}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className=" w-full md:flex text-2xl">
        {UtilityPages.map((link) => (
          <div className="w-[30%]">
            <p className="text-3xl">{link.title}</p>
            <p className="my-4">Style Guide</p>
            <p className="my-4">Instructions</p>
            <p className="my-4">Licenses</p>
            <p className="my-4">Change log</p>
            <p className="my-4">Error 404</p>
            <p className="my-4">Password</p>
          </div>
        ))}

        <div>
          <div>
            <h3 className="text-3xl mb-8">Subscribe to our newsletter</h3>
            <p className="my-8">
              Meant balls it if up doubt small purse. Required his you put the
              outlived answered position.
            </p>
          </div>
          <div className="flex items-center justify-between  border-white border-2 my-4 ">
            <label className="text-2xl text-black-900 py-2 px-4">
              Your Email
            </label>
            <button className="p-4 bg-white text-black">
              <p> Submit </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
