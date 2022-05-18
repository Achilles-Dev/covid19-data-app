import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { year } from './Date';

const Header = () => (
  <div className="header d-flex">
    <div className="d-flex">
      <NavLink to="/"><FontAwesomeIcon icon={faChevronLeft} /></NavLink>
      <h3>{year}</h3>
    </div>
    <h3>Covid19 Data</h3>
    <div className="header-end d-flex">
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faGear} />
    </div>
  </div>
);

export default Header;
