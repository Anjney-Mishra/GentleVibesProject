import React, { useEffect, useState } from 'react'
import { Country, State, City } from "country-state-city";
import { Select, SelectItem } from "@nextui-org/react";

const LocationSelect = () => {
    let countryData = Country.getAllCountries();
  const [StateData, setStateData] = useState();
  const [CityData, setCityData] = useState();
  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState()

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    StateData && setState(StateData[0]);
  }, [StateData]);

  useEffect(()=>{
    setCityData(City.getCitiesOfState(country?.isoCode,state?.isoCode))
  },[state])

  useEffect(()=>{
    CityData && setCity(CityData[0])
  },[CityData])
  return (
    <>
        <Select label="Select Country" >
                {countryData.map((country) => (
                  <SelectItem onClick={()=>setCountry(country)} key={country.name} value={country.name}>
                    {country.name}
                </SelectItem>
                ))}
              </Select>

              {StateData ? (
                <>
                  <Select label="Select State">
                    {StateData.map((state) => (
                      <SelectItem onClick={()=>setState(state)} key={state.name} value={state.name}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </Select>
                  {CityData ? <>
                    <Select label="Select city">
                    {CityData.map((city) => (
                      <SelectItem key={city.name} value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </Select>
                  </>:<></>}
                </>
              ) : (
                <></>
              )}
    </>
  )
}

export default LocationSelect