import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Country = (props) => {
  const { country, data } = props;
  return (
    <div key={country.id}>
      <Link to={`/country/${country.name}`}><h2>{country.name}</h2></Link>
      <p>{`Total deaths: ${data[country.name].today_deaths}`}</p>
      <p>{`Total active cases: ${data[country.name].today_confirmed}`}</p>
    </div>
  );
};

export default Country;
