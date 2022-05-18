import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import numberFormater from './FormatNumber';

const Regions = () => {
  const data = useSelector((state) => state.countries.data);
  const { country } = useParams();
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    setCountryName(country);
  }, []);
  return (
    <div className="region">
      {
        data[countryName]
          ? (
            <>
              <div className="region-header d-flex">
                <img src={`https://countryflagsapi.com/svg/${data[countryName].name}`} alt={data[countryName].name} />
                <div className="region-left d-col-flex">
                  <h2>{data[countryName].name.toUpperCase()}</h2>
                  <p>{`Total deaths: ${numberFormater(data[countryName].today_deaths)}`}</p>
                  <p>{`Total cases: ${numberFormater(data[countryName].today_confirmed)}`}</p>
                </div>
              </div>
              <h3>STATS BY REGION/STATE</h3>
              <div className="region-cards d-col-flex">
                {
                  data[countryName].regions.length > 0
                    ? data[countryName].regions.map((region) => (
                      <div key={region.id} className="region-card-details d-flex">
                        <h3>{region.name}</h3>
                        <p>{`deaths: ${numberFormater(region.today_deaths)}`}</p>
                        <p>{`cases: ${numberFormater(region.today_confirmed)}`}</p>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </div>
                    ))
                    : <h3>No Region Found</h3>
                }
              </div>
            </>
          ) : ''
    }
    </div>
  );
};

export default Regions;
