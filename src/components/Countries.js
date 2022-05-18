import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getAllCountriesData } from '../redux/countries';
import Country from './Country';
import date from './Date';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const data = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCountriesData(date));
  }, [dispatch]);

  return (
    <div>
      <div className="main-header">
        <h2>WORLD STATS</h2>
        <p>{`Total confirmed: ${4}`}</p>
        <p>{`Total deaths: ${4}`}</p>
      </div>
      {
        countries.length > 0
          ? countries.map((country) => (
            <Country key={country.id} country={country} data={data} />
          ))
          : ''
      }
    </div>
  );
};

export default Countries;
