import React, { useState,useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import NNavbar from "../components/NNavbar";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link, useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import { BK_URL } from "../constants/constants";
import toast from "react-hot-toast";

const Register = () => {

  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("0")
  const navigate = useNavigate()

  let countryData = Country.getAllCountries();
  const [StateData, setStateData] = useState(null);
  const [CityData, setCityData] = useState(null);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null); 

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  const sendData = {username,email,password,phone,country:country?.name,state:state?.name,city:city?.name}


  const handleRegister = async () => {
    try {
      const res = await axios.post(BK_URL+"/api/auth/register",sendData)
      toast.success("Registered Successfully! Please LogIn")
      navigate("/login")
    } catch (error) {
      if (error.response && error.response.status === 400) {
          toast.error(error.response.data.error);
      } else {
          toast.error("An error occurred");
      }
    }
  }

  
  return (
    <div>
      <NNavbar />
      <div className="h-[100vh] flex justify-center items-center">
        <Card className="py-4 h-auto md:w-[30%] sm:w-[80%]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl center">Register</h4>
          </CardHeader>
          <CardBody className="mt-6 overflow-visible py-2">
            <div className="flex flex-col w-full gap-4">
              <Input type="text" label="Username" onChange={(e)=>setUserName(e.target.value)} />
              <Input type="email" label="Email" onChange={(e)=>setEmail(e.target.value)} />
              <Input type="password" label="Password" onChange={(e)=>setPassword(e.target.value)} />
              <Input type="number" label="Phone Number" onChange={(e)=>setPhone(e.target.value)} />
              <>
      <Select label="Select Country">
        {countryData.map((country) => (
          <SelectItem
            onClick={() => setCountry(country)}
            key={country.name}
            value={country}
          >
            {country.name}
          </SelectItem>
        ))}
      </Select>

      {country ? (
        <>
          <Select label="Select State">
            {StateData.map((state) => (
              <SelectItem
                onClick={() => setState(state)}
                key={state.name}
              >
                {state.name}
              </SelectItem>
            ))}
          </Select>
          
          {state ? (
            <>
              <Select label="Select city">
                {CityData.map((city) => (
                  <SelectItem key={city.name} onClick={()=>setCity(city)}>
                    {city.name}
                  </SelectItem>
                ))}
              </Select>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
              <Button variant="shadow" onClick={handleRegister} color="primary" size="lg">
                Register
              </Button>
            </div>
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="text-md center">
              Already a user ?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>{" "}
            </h4>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Register;
