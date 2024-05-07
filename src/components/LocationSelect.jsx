import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { Select, SelectItem } from "@nextui-org/react";

const LocationSelect = () => {
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

  return (
    <>
      <Select label="Select Country">
        {countryData.map((country) => (
          <SelectItem
            onClick={() => setCountry(country)}
            key={country.name}
            value={country.name}
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
                value={state.name}
              >
                {state.name}
              </SelectItem>
            ))}
          </Select>
          
          {state ? (
            <>
              <Select label="Select city">
                {CityData.map((city) => (
                  <SelectItem key={city.name} value={city.name}>
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
  );
};

export default LocationSelect;
