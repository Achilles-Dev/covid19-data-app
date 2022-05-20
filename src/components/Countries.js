import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/countries';
import Country from './Country';
import numberFormater from './FormatNumber';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries, shallowEqual);
  const data = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput !== '') {
      const newCountry = countries.filter((country) => country.name === searchInput
      || country.id === searchInput || country.id.includes(searchInput));
      setFilteredCountries([...newCountry]);
    } else {
      setFilteredCountries([...countries]);
    }
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    handleSearch();
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCountries([...countries]);
  }, [countries]);

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  useEffect(() => {
    const deaths = countries.map((country) => {
      if (data[country.name]) {
        return data[country.name].today_deaths;
      } return 0;
    }).reduce((prev, curr) => prev + curr, 0);
    setTotalDeaths(deaths);
  }, [Object.keys(data).length]);

  useEffect(() => {
    const confirmed = countries.map((country) => {
      if (data[country.name]) {
        return data[country.name].today_confirmed;
      } return 0;
    }).reduce((prev, curr) => prev + curr, 0);
    setTotalConfirmed(confirmed);
  }, [Object.keys(data).length]);

  return (
    <div className="main">
      <div className="main-header d-col-flex">
        <h2>WORLD STATS</h2>
        <p>{`Confirmed cases: ${numberFormater(totalConfirmed)}`}</p>
        <p>{`Deaths: ${numberFormater(totalDeaths)}`}</p>
      </div>
      <div className="country-header d-flex">
        <h3>STATS BY COUNTRY</h3>
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for country..."
              value={searchInput}
              onChange={(e) => handleChange(e)}
            />
            <span className="sr-only">Search countries here</span>
          </label>
        </div>
      </div>
      <div className="main-cards">
        {
          countries && countries.length > 0
            ? filteredCountries.map((country, index) => (
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
