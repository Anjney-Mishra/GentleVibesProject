import React from 'react'
import NNavbar from '../components/NNavbar'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
        <NNavbar/>
        <div className='h-[100vh] flex justify-center items-center'>
            <Card className="py-4 h-auto md:w-[30%] sm:w-[80%]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-2xl center">LOGIN</h4>
                </CardHeader>
                <CardBody className="mt-6 overflow-visible py-2">
                <div className="flex flex-col w-full gap-4">
                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
                <Button variant='shadow' color='primary' size='lg' >Login</Button>
                <Button variant='shadow' color='danger' size='lg' ><span><FaGoogle /></span>Login With Google</Button>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="text-md center">Create New Account <Link to="/register" className='text-blue-400'>Regisiter</Link> </h4>
                </CardHeader>
                </div>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}

export default Login