import React from 'react';
import { useInView } from 'react-intersection-observer';

function Navbar() {

    return (
       <div className=' bg-slate-500 min-w-full flex justify-center '>
          <div className='flex min-w-full justify-evenly '>
            <button className=' flex bg-green-700 text-white p-2.5 w-fit mt-9 hover:-translate-y-10 duration-200'>
              About me
            </button>
            <button className=' bg-green-700 text-white p-2.5 w-fit mt-9'>
              About me
            </button>
            <button className=' bg-green-700 text-white p-2.5 w-fit mt-9'>
              About me
            </button>
            <button className=' bg-green-700 text-white p-2.5 w-fit mt-9'>
              About me
            </button>
          </div>
      </div>
    )
}

export default Navbar; 