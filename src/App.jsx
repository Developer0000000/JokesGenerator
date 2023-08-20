import axios from 'axios';
import React, { useMemo, useState } from 'react';
import Spinner from './Spinner';


const App = () => {

  const [newJokes, setNewJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log('🚀 ~ file: any ~ line any ~ any ~ value', newJokes)


  const generateJokes = async () => {

    let apiKey = import.meta.env.VITE_JOKES;
    let jokeEndPoint = `https://api.api-ninjas.com/v1/jokes?limit=1`;
    setLoading(true);

    try {

      let response = await axios.get(jokeEndPoint, {
        headers: {
          'X-API-KEY': apiKey
        }
      });

      let jokeData = await response.data;
      setNewJokes(jokeData);

    }
    catch (error) {
      console.log('🚀 ~ file: any ~ line any ~ any ~ value', error)
    }

    setLoading(false);


  };


  useMemo(() => {
    generateJokes();
  }, [])


  return (

    <>



      <div className='grid place-items-center h-[100vh] w-[100vw] bg-sky-100'>
        <section className="bg-[#0D1821] px-6 dark:bg-gray-900 lg:w-1/2 sm:w-full lg:rounded-xl rounded-md">
          <div className="py-8 lg:px-10 mx-auto max-w-screen-xl lg:py-12">
            <div className='flex lg:justify-center items-center'> {loading && <Spinner />} </div>
            <h1 className="text-center mb-4 text-[2rem] font-extrabold text-gray-50 lg:text-5xl ">Generate a New Joke </h1>
            <p className="text-center mb-8 text-lg font-normal text-sky-100 lg:text-xl dark:text-gray-400"> 😂 Best Joke to make your day 👻</p>



            <div className="text-white text-lg text-center tracking-widest leading-8 py-2 myFont" >
              {
                newJokes.map((val) => {
                  return val.joke
                })
              }
            </div>

            <div className='border-b-2 my-10 rounded-lg'></div>

            <div className="flex flex-col space-y-4 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
              <button onClick={generateJokes} type='button' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#0FF4C6] hover:bg-[#0FF1a1] hover:scale-105 transition-transform outline-none">
                New Joke
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>

            </div>


          </div>


        </section>



      </div>

    </>

  )
}

export default App
