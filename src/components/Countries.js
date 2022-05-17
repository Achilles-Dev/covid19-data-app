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
