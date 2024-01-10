import React from 'react'
import Typed from 'react-typed';
import manStand from '../assets/phone.jpg'
import handNeedle from '../assets/hand needle.jpg'
import manSurgeon from '../assets/man-surgeon.jpg'

const Introduction = () => {
  return (
    <div className='text-white lg:inline-flex'>
        <div className='inline-flex justifiy-end max-w-[1240px]'>
      <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center px-4'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 max-w-[550px] pl-2 text-teal-900'>
          Efoyta:
        </h1>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 pt-2 bg-gradient-to-r from-lime-300 to-gray-900 bg-clip-text text-transparent'
            strings={['Your Health', 'Your Time', 'Your Appointment']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />

        <div className='flex justify-start items-center max-w-[600px]'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 bg-gradient-to-l from-blue-200 to-gray-900 bg-clip-text text-transparent'>
          Seamless Care at Your Fingertips!
          </p>
        </div>
        <div className='text-left md:pl-40 max-w-[600px]'>
        <button className='bg-gradient-to-r from-green-600 via-yellow-500 to-teal-500 shadow-md w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ease-in-out duration-300 hover:brightness-150 hover:scale-110'>Sign Up</button>
        </div>
      </div>
      </div>
      <div className='flex w-auto sm:justify-center justify-end max-w-[700px] ml-2'>
        <img className='hidden md:block shadow-lg shadow-black xl:max-w-[350px] w-auto lg:max-w-[250px] md:max-w-[400px] sm:max-w-[200px] h-auto m-2 rounded-xl ease-in-out duration-300 hover:scale-110 brightness-90 hover:brightness-110' src={manSurgeon} alt='/' />
        <div className='hidden md:block md:flex-col m-2'>
        <img className='w-[300px] p-2 h-[300px] m-2 rounded-[25px] hover:scale-110 ease-in-out duration-300 hover:brightness-110' src={manStand} alt='/' />
        <img className='w-[300px] p-2 h-[300px] m-2 rounded-[25px] hover:scale-110 ease-in-out duration-300 hover:brightness-110' src={handNeedle} alt='/' />
        </div>
        </div>

    </div>
  )
}

export default Introduction