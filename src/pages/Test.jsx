import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import NNavbar from '../components/NNavbar';
import { questions } from '../utils/questionData';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BK_URL } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const {user,setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setScore(score + option.score);
    setCurrentQuestion(currentQuestion + 1);
  };

  const sendData = {id:user?._id,score:score}


  const submitScore = async() => {
    try {
        const res = await axios.put(BK_URL+"/api/user/updatelevel",sendData)
        toast.success("Level Updated Successfully Please LogIn Again")
        await axios.get(BK_URL+"/api/auth/logout",{withCredentials:true})
        setUser(null)
        navigate("/login")

    } catch (error) {
        console.log(error)
        toast.error(error)
    }
  }

  return (
    <div>
      <NNavbar/>
      <div className='h-[100vh] flex justify-center items-center'>
        {   user ? 
            user?.testgiven ? <h1 className='text-2xl'>{user?.username}! You have Already Given Test</h1> :
            <Card className="py-4 h-auto md:w-[50%] sm:w-[80%]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h1 className="font-bold text-2xl mb-4">TEST</h1>
              {currentQuestion < questions.length ? (
                <p>{questions[currentQuestion].question}</p>
              ) : (
                <p className='text-4xl'>SCORE: {score}</p>
              )}
            </CardHeader>
            <CardBody className="mt-6 overflow-visible py-2">
              <div className="flex flex-col w-full gap-4">
                {currentQuestion < questions.length ? (
                  questions[currentQuestion].options.map((option, index) => (
                    <Button key={index} onClick={() => handleOptionClick(option)}>{option.optionText}</Button>
                  ))
                ) : (
                  <Button color='secondary' onClick={submitScore}>Submit Your Score</Button>
                )}
              </div>
            </CardBody>
          </Card>
          :<h1 className='text-2xl'>Please Login To Give Test</h1>
        }


      </div>
    </div>
  );
};

export default Test;
