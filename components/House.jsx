import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faBathtub,
  faSquare,
  faBed,
} from '@fortawesome/free-solid-svg-icons';

const House = ({ house }) => {
  return (
    <div className="flex flex-col gap-4 p-2 lg:p-0 lg:w-[45%] text-md lg:text-[35px] hover:scale-110 ">
      <Image
        src={house.imgUrl}
        alt={house.title}
        width={700}
        height={300}
        className=" w-[95%]"
      />
      <h3 className="font-medium ">{house.title}</h3>
      <div className="shadow-3 flex gap-2 items-center ">
        <FontAwesomeIcon icon={faLocationDot} />
        <p className="">{house.location}</p>
      </div>
      <div className="flex text-black-500  gap-4 ">
        <div className=" flex gap-2 items-center">
          <FontAwesomeIcon icon={faSquare} />
          <p>
            <span>{house.dimension} </span>Sq.ft
          </p>
        </div>
        <div className=" flex gap-2 items-center">
          <FontAwesomeIcon icon={faBathtub} />
          <p>
            <span>{house.bath} </span>Bath
          </p>
        </div>
        <div className=" flex gap-2 items-center">
          <FontAwesomeIcon icon={faBed} />
          <p>
            <span>{house.bed} </span>Bed
          </p>
        </div>
      </div>
      <div className="font-medium ">${house.price}</div>
    </div>
  );
};

export default House;
