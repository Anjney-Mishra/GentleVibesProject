import React from 'react'
import {Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

const Hero = () => {
  return (
    <div className='h-[90vh]'>
        <div className='flex flex-row flex-wrap justify-evenly items-center pt-20'>
            <div className='flex flex-col gap-4 items-center w-2/4'>
                <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700text-5xl p-4 font-bold from-purple-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent'>Let's Take A Quick Test</h1>
                <Button size='lg' className="bg-gradient-to-tr from-purple-600 to-blue-600 text-white shadow-lg">Test Now</Button>
            </div>
            <div>
            <Image
                isBlurred
                width={300}
                src="heroimage.png"
                alt="NextUI Album Cover"
                className="m-5 animate-pulse"
            />
            </div>
        </div>
    </div>
  )
}

export default Hero