import React from 'react'
import NNavbar from '../components/NNavbar'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {DatePicker} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
        <NNavbar/>
        <div className='h-[100vh] flex justify-center items-center'>
            <Card className="py-4 h-auto md:w-[30%] sm:w-[80%]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-2xl center">Register</h4>
                </CardHeader>
                <CardBody className="mt-6 overflow-visible py-2">
                <div className="flex flex-col w-full gap-4">
                <Input type="text" label="Username" />
                <DatePicker label="Birth date" />
                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
                <Input type="number" label="Phone Number" />
                <Button variant='shadow' color='primary' size='lg' >Register</Button>
                </div>
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="text-md center">Already a user ? <Link to="/login" className='text-blue-400'>Login</Link> </h4>
                </CardHeader>
            </Card>
        </div>
    </div>
  )
}

export default Register