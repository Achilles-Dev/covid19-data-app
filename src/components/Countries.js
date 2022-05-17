import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getAllCountriesData } from '../redux/countries';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const data = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();

  const today = new Date();
  let month = today.getMonth();
  let day = today.getDate();
  if (month.toString().length < 2) {
    month = `0${month}`;
  }
  if (day.toString().length < 2) {
    day = `0${day}`;
  }
  const date = `${today.getFullYear()}-${month}-${day}`;

  useEffect(() => {
    dispatch(getAllCountries());
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
