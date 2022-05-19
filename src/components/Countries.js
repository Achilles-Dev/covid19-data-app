import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/countries';
import Country from './Country';
import numberFormater from './FormatNumber';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const data = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (data && data !== []) {
      const deaths = countries && countries.map((country) => data[country.name].today_deaths)
        .reduce((prev, curr) => prev + curr, 0);
      setTotalDeaths(deaths);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const confirmed = countries.map((country) => data[country.name].today_confirmed)
        .reduce((prev, curr) => prev + curr, 0);
      setTotalConfirmed(confirmed);
    }
  }, [data]);

  return (
    <div className="main">
      <div className="main-header d-col-flex">
        <h2>WORLD STATS</h2>
        <p>{`Confirmed cases: ${numberFormater(totalConfirmed)}`}</p>
        <p>{`Deaths: ${numberFormater(totalDeaths)}`}</p>
      </div>
      <h3>STATS BY COUNTRY</h3>
      <div className="main-cards">
        {
          countries && countries.length > 0
            ? countries.map((country, index) => (
              <Country
                key={country.id}
                country={country}
                data={data}
                index={index}
              />
            ))
            : ''
        }
      </div>
    </div>
  );
};

export default Countries;
