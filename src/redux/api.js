import axios from 'axios';

const baseURL = 'https://api.covid19tracking.narrativa.com/';

const API = {
  getAllCountries: (success) => {
    axios.get(`${baseURL}/api/countries`)
      .then((res) => {
        success(res);
      });
  },

  getAllCountriesData: (date, success) => {
    axios.get(`${baseURL}/api/${date}`)
      .then((res) => {
        success(res);
      });
  },

  getCountryDataByDate: (country, date, success) => {
    axios.get(`${baseURL}/api/country/${date}/country/${country}`)
      .then((res) => {
        success(res);
      });
  },
  getCountryRegions: (countryName, success) => {
    axios.get(`${baseURL}/api/countries/${countryName}/regions`)
      .then((res) => {
        success(res);
      });
  },

  getCountryRegionSubRegions: (country, region, success) => {
    axios.get(`${baseURL}/api/countries/${country}/regions/${region}/sub_regions`)
      .then((res) => {
        success(res);
      });
  },

};

export default API;
