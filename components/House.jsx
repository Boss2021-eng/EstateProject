import React from 'react';
import Image from 'next/image';

const House = ({ house }) => {
  return (
    <div className="flex flex-col gap-4 w-[90%] md:w-[400px]">
      <Image src={house.imgUrl} alt={house.title} width={700} height={300} />
      <p className="text-3xl">{house.title}</p>
      <div className="shadow-3">
        <p className="text-xl">{house.location}</p>
      </div>
      <div className="flex text-xl gap-2">
        <div>
          <p>
            <span>{house.dimension} </span>Sq.ft
          </p>
        </div>
        <div>
          <p>
            <span>{house.bath} </span>Bath
          </p>
        </div>
        <div>
          <p>
            <span>{house.bed} </span>Bed
          </p>
        </div>
      </div>
      <div className="text-3xl">${house.price}</div>
    </div>
  );
};

export default House;
