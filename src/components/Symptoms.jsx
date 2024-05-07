import React from 'react'
import { PiArrowFatLinesRightFill } from "react-icons/pi";

const Symptoms = () => {
  return (
    <div className='h-[80vh] p-5'>
        <h1 className='text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700text-5xl p-4 font-bold from-purple-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent'>Are you facing ?</h1>
        <div className='mt-4'>
            <h1 className='flex items-center gap-2 text-2xl'><PiArrowFatLinesRightFill/>Item1</h1>
            <h1 className='flex items-center gap-2 text-2xl'><PiArrowFatLinesRightFill/>Item1</h1>
            <h1 className='flex items-center gap-2 text-2xl'><PiArrowFatLinesRightFill/>Item1</h1>
            <h1 className='flex items-center gap-2 text-2xl'><PiArrowFatLinesRightFill/>Item1</h1>
        </div>
    </div>
  )
}

export default Symptoms