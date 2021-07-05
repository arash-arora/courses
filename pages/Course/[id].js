import React from "react";
import { useRouter } from "next/router";

const defaultEndPoint = "https://froshlinkdummyapi.herokuapp.com/users";
export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

const Course = ({ data }) => {
  const Router = useRouter();
  const { id } = Router.query;
  console.log(data);
  const dataF = data.data.filter((item) => {
    return item.course_id === id;
  });
  console.log(dataF);
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <img className='w-80' src={dataF[0].course_thumbnail} />
      <h1 className='text-3xl my-8 uppercase'>{dataF[0].course_title} </h1>
      <p className='w-1/2 text-center'>{dataF[0].course_description}</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4'>
        Enroll Now
      </button>
    </div>
  );
};

export default Course;
