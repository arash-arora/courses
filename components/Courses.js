import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router'



const defaultEndPoint = "https://froshlinkdummyapi.herokuapp.com/users";
export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data
    }
  }
}


export default function Courses({data}) {

  return (
    <div className="bg-gradient-to-t bg-gray-200">
            {data.data.map((dataele) => (
                <div className="flex justify-center items-center" key={dataele.course_id}>
                  <div className="flex w-1/2 bg-white rounded-3xl overflow-hidden shadow-xl mt-8">
                    <img className="m-8 rounded-full w-full h-32 sm:h-48 object-cover" src={dataele.course_thumbnail} alt="img"></img>
                    <div className="mr-4 ml-4 mt-8 mb-4"> 
                      <span className="flex text-3xl justify-center font-bold">{dataele.course_title}</span>
                      <p className="mt-4 block text-gray-500 text-sm">{dataele.course_description}</p>
                      <div className="m-4">
                        <button onClick={()=>{
                          dataF(dataele.course_id)
                          Router.push('/Router')
                        }} className="mr-8 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full">Know More</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Enroll Now</button>
                      </div>

                    </div>
                  </div>
                </div>
            ))}
    </div>
  )
}

