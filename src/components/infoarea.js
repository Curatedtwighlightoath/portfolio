import React from 'react';
import { useInView } from 'react-intersection-observer';

function InfoArea() {

    return (
        <div>
         <h1 className="text-4xl text-center">
           Tailwind CSS makes styling React components easier!
         </h1>
        <button className=" bg-green-700 text-white p-2.5 w-fit mt-9 ">
         Get Started
        </button>
        </div>
    )
}

export default InfoArea; 