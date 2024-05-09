import React, { useContext, useState } from 'react'
import NNavbar from '../components/NNavbar'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import { BK_URL } from "../constants/constants";
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const ContributorLogin = () => {
    // const navigate = useNavigate()
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")
    // const {setUser} = useContext(UserContext)

    // const handleLogin = async() => {
    //     try {
    //         const res = await axios.post(BK_URL+"/api/auth/login",{email,password},{withCredentials:true})
    //         toast.success("Successfully Logged In")
    //         setUser(res.data)
    //         navigate("/")
            
    //     } catch (error) {
    //         if (error.response && error.response.status === 400) {
    //             toast.error(error.response.data.error);
    //         } else {
    //             toast.error("An error occurred");
    //         }
    //     }
    // }

  return (
    <div>
        <NNavbar/>
        <div className='h-[100vh] flex justify-center items-center'>
            <Card className="py-4 h-auto md:w-[30%] sm:w-[80%]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-2xl center">LOGIN AS CONTRIBUTOR</h4>
                </CardHeader>
                <CardBody className="mt-6 overflow-visible py-2">
                <div className="flex flex-col w-full gap-4">
                <Input type="email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
                <Input type="password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
                <Button variant='shadow' color='primary' size='lg' >Login</Button>
                {/* <Button variant='shadow' color='danger' size='lg' ><span><FaGoogle /></span>Login With Google</Button> */}
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="text-md center">Create New Account <Link to="/contributorregister" className='text-blue-400'>Regisiter</Link> </h4>
                </CardHeader>
                </div>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}

export default ContributorLogin