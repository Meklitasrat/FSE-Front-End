import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className="w-full text-3xl font-bold text-teal-900">🩺Efoyta</h1>
        <ul className='hidden md:flex'>
        <li className='p-4 whitespace-nowrap text-yellow-100 hover:text-blue-300 hover:translate-y-[-4px] ease-in-out duration-200'>Home</li>
        <li className='p-4 whitespace-nowrap text-yellow-100 hover:text-blue-300 hover:translate-y-[-4px] ease-in-out duration-200'>About Us</li>
        <li className='p-4 whitespace-nowrap text-yellow-100 hover:text-blue-300 hover:translate-y-[-4px] ease-in-out duration-200'>Find Doctor</li>
        <li className='p-4 whitespace-nowrap text-yellow-100 hover:text-blue-300 hover:translate-y-[-4px] ease-in-out duration-200'>Contact</li>
      </ul>
      <div className='hidden md:flex text-center md: max-w-[600px] items-center'>
        <button className='bg-gradient-to-br from-red-500 to-blue-800 shadow-md w-[100px] rounded-md font-medium mx-auto py-3 text-black ease-in-out duration-300 hover:brightness-150 hover:scale-110'>Log in</button>
        </div>
      <div onClick={handleNav} className='block md:hidden text-white'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%] md:hidden'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Efoyta</h1>
          <li className='p-4 border-b border-gray-600 hover:text-blue-300'>Home</li>
          <li className='p-4 border-b border-gray-600 hover:text-blue-300'>About Us</li>
          <li className='p-4 border-b border-gray-600 hover:text-blue-300'>Find Doctor</li>
          <li className='p-4 hover:text-blue-300'>Contact</li>
          <li className='p-4'> <div className='text-center md:pl-40 max-w-[600px]'>
        <button className='bg-gradient-to-r from-green-600 via-yellow-500 to-teal-500 shadow-md w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ease-in-out duration-300 hover:brightness-150 hover:scale-110'>Sign Up</button>
        </div><div className='text-center md:pl-40 max-w-[600px] items-center'>
        <button className='bg-gradient-to-br from-red-500 to-blue-800 shadow-md w-[200px] rounded-md font-medium mx-auto py-3 text-black ease-in-out duration-300 hover:brightness-150 hover:scale-110'>Log in</button>
        </div>
</li>
      </ul>

    </div>
  )
}

export default Navbar