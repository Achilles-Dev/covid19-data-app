import axios from 'axios';

const baseURL = 'https://api.covid19tracking.narrativa.com';

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
};

export default API;
