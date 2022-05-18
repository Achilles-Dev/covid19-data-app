import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header d-flex">
    <div className="d-flex">
      <NavLink to="/"><i className="fa fa-chevron-left" /></NavLink>
      <h3>Covid19 Data</h3>
    </div>
    <h3>Data by country</h3>
    <div className="header-end d-flex">
      <i className="fa fa-solid fa-gear" />
      <i className="fa fa-solid fa-microphone" />
    </div>
  </div>
);

export default Header;
