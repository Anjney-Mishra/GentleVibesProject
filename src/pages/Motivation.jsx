import React, { useEffect, useState } from 'react'
import NNavbar from '../components/NNavbar'
import axios from 'axios'
import { MOTI_URL, XAPIKEY } from '../constants/constants'
import {Skeleton} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { TbBulb } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";
import MusicPlayerCard from '../components/MusicPlayerCard';
import NCard from '../components/NCard';

const Motivation = () => {

    const [line,setLine] = useState({quote:"",author:""})
    const [lineload,setLineLoad] = useState(false)

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    const fetchMotivation = async() => {
        try {
            setLineLoad(true)
            const res = await axios.get(MOTI_URL,{headers:{'X-Api-Key': XAPIKEY}})
            console.log(res.data)
            setLine({quote:res.data[0].quote,author:res.data[0].author})

            setLineLoad(false)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        fetchMotivation()
    },[])

  return (
    <div>
        <NNavbar/>
        <div className='h-[50vh] mb-5 flex justify-center items-center'>
            {
                lineload ?
                <div className="w-3/5 flex flex-col gap-2">
                <Skeleton className="h-3 w-4/5 rounded-lg"/>
                <Skeleton className="h-3 w-4/5 rounded-lg"/>
                <Skeleton className="h-3 w-4/5 rounded-lg"/>
                <Skeleton className="h-3 w-2/5 rounded-lg"/>
                </div>

          : <div> <h1 className='text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700text-5xl p-4 font-bold from-purple-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent'>{line.quote}</h1>
            <h1 className='text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700text-5xl p-4 font-bold from-purple-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent'>-{line.author}</h1>
            </div>
            }
        </div>
        <div className='h-auto mt-4 flex flex-col justify-center items-center pb-8'>
            <h1 className='text-2xl'>Follow These Activities</h1>
            <div className='w-1/2'>
            <Accordion selectionMode="multiple">
            <AccordionItem key="1" startContent={<TbBulb/>} aria-label="Accordion 1" title="Meditation Guide">
                <div className='flex gap-2 p-2'>
                    <NCard title="Beginner"/>
                    <NCard title="Intermediate"/>
                    <NCard title="Advance"/>
                </div>
            </AccordionItem>
            <AccordionItem key="2" startContent={<IoMusicalNotesOutline/>} aria-label="Accordion 2" title="Sound Therapy">
                <MusicPlayerCard />
                <MusicPlayerCard />
                <MusicPlayerCard />
            </AccordionItem>
            <AccordionItem key="3" startContent={<TbBulb/>} aria-label="Accordion 3" title="Others">
                {defaultContent}
            </AccordionItem>
            </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Motivation