// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Router from "next/router";
import Search from "../components/Search";
import { useState } from "react";
import CourseCard from "../components/CourseCard";

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

export default function Home({ data, dataF }) {
  const [saved, setSave] = useState([]);
  const [searchField, setSearchField] = useState("");

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const setFalse = () => {
    setStyle(false);
  };

  const [btn_style, setStyle] = useState(false);
  const filteredCourses = data.data.filter((course) => {
    return course.course_title
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });
  console.log(filteredCourses);
  return (
    <div className='flex pb-20 justify-between bg-gray-200 w-full items-start'>
      <div
        className='bg-gradient-to-t flex-col flex justify-center items-center'
        style={{ flex: "2" }}>
        <div className='flex sticky top-1 justify-center items-center w-full'>
          <Search searchField={searchField} setSearchField={setSearchField} />
          <svg
            className='mx-4 w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
            />
          </svg>
        </div>

        {filteredCourses.map((dataele, key) => (
          <CourseCard
            id={key}
            dataele={dataele}
            setSave={setSave}
            // name={filteredCourses}
          />
        ))}
      </div>

      <div
        className={`flex-1 ${
          saved.length ? "" : "hidden"
        } bg-gradient-to-t flex-col flex justify-center items-center`}>
        <div className='flex sticky top-1 justify-center items-center w-full'>
          {/* <Search /> */}
          {/* <svg className="mx-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg> */}
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>Saved Courses</h1>
        </div>

        {saved.filter(distinct).map((ele) => (
          <div
            className='flex justify-center items-center w-full'
            key={ele.course_id}>
            <div className='flex w-4/5 bg-white rounded-3xl overflow-hidden shadow-xl mt-8'>
              <img
                className='object-contain m-8 rounded-full w-24 h-24 sm:h-24'
                src={ele.course_thumbnail}
                alt='img'></img>
              <div className='mr-4 ml-4 mt-8 mb-4'>
                <span className='flex text-3xl justify-center mt-6 font-bold'>
                  {ele.course_title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
