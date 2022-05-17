import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, getAllCountriesData } from '../redux/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const data = useSelector((state) => state.countries.data);
  const name = 'Afghanistan';
  console.log(data[name]);
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
            <div key={country.id}>
              <h2>{country.name}</h2>
              <p>{`Total deaths: ${data[country.name].today_deaths}`}</p>
              <p>{`Total active cases: ${data[country.name].today_confirmed}`}</p>
            </div>
          ))
          : ''
      }
    </div>
  );
};

export default Countries;
