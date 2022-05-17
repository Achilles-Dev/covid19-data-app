import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Regions = () => {
  const data = useSelector((state) => state.countries.data);
  const { country } = useParams();
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    setCountryName(country);
  }, []);
  return (
    <div>
      {
        data[countryName]
          ? (
            <>
              <h2>{data[countryName].name}</h2>
              <p>{`Total deaths: ${data[countryName].today_deaths}`}</p>
              <p>{`Total active cases: ${data[countryName].today_confirmed}`}</p>
              {
                data[countryName].regions.length > 0
                  ? data[countryName].regions.map((region) => (
                    <>
                      <p key={region.id}>{region.name}</p>
                      <p>{`Total deaths: ${region.today_deaths}`}</p>
                      <p>{`Total active cases: ${region.today_confirmed}`}</p>
                    </>
                  ))
                  : <p>No Region Found</p>
              }
            </>
          ) : ''
    }
    </div>
  );
};

export default Regions;
