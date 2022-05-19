import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import numberFormater from './FormatNumber';

/* eslint-disable react/prop-types */
const Country = (props) => {
  const {
    country, data, index,
  } = props;

  return (
    <div
      key={country.id}
      className={`card d-col-flex ${index === 1 || index === 2
        || index % 4 === 1 || index % 4 === 2 ? 'deep-red' : ''}`}
    >
      <div className="card-top d-flex">
        <img src={`https://countryflagsapi.com/svg/${country.name}`} alt={country.name} />
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </div>
      <Link to={`/country/${country.name}`} className="d-col-flex">
        <div>
          <h2 className="d-flex">{country.name.toUpperCase()}</h2>
          {
            data[country.name]
              ? (
                <div className="card-details d-col-flex">
                  <p>{`Cases: ${numberFormater(data[country.name].today_confirmed)}`}</p>
                  <p>{`Deaths: ${numberFormater(data[country.name].today_deaths)}`}</p>
                </div>
              )
              : ''
          }
        </div>
      </Link>
    </div>

  );
};

export default Country;
