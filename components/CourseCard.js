import React, { useState } from "react";
import Router from "next/router";

const CourseCard = ({ dataele, setSave, id, name }) => {
  const [color, setColor] = useState(false);

  return (
    <div
      key={id}
      className='flex justify-center items-center w-full'
      key={dataele.course_id}
      index={dataele.course_id}>
      <div className='flex w-4/5 bg-white rounded-3xl overflow-hidden shadow-xl mt-8'>
        <img
          className='object-contain m-8 rounded-full w-full h-32 sm:h-48'
          src={dataele.course_thumbnail}
          alt='img'></img>
        <div className='relative mr-4 ml-4 mt-8 mb-4 '>
          <span className='flex text-3xl justify-center font-bold'>
            {dataele.course_title}
          </span>
          <svg
            id='bookmark'
            onClick={() => {
              if (!color) {
                setSave((prevItem) => {
                  return [...prevItem, dataele];
                });
              } else {
                setSave((prevItem) => {
                  return prevItem.filter((item) => {
                    return item != dataele;
                  });
                });
              }
              setColor((prev) => !prev);
            }}
            // style={{pointerEvents: btn_style?"none" : "all"}}
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 cursor-pointer h-6 w-6 absolute right-5 top-1'
            fill={`${color ? "black" : "none"}`}
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
            />
          </svg>
          <p className='mt-4 block text-gray-500 text-sm'>
            {dataele.course_description}
          </p>
          <div className='m-4'>
            <button
              onClick={() => {
                // dataF(dataele.course_id)
                Router.push(`/Course/${dataele.course_id}`);
              }}
              className='mr-8 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full'>
              Know More
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
