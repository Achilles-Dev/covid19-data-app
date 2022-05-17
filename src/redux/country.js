import API from './api';

const GET_COUNTRY_DATA = 'covid19-data-app/country/GET_COUNTRY_DATA';

const initialState = [];

const countryReducer = (state = initialState, action) => {
  let countries;
  switch (action.type) {
    case GET_COUNTRY_DATA:
      countries = action.payload.map((country) => ({
        id: country.id,
        name: country.name,
        links: country.links,
      }));
      return countries;
    default: return state;
  }
};

export const getCountryDataByDate = (country, date) => (dispatch) => {
  API.getAllCountries(country, date, (res) => {
    dispatch({
      type: GET_COUNTRY_DATA,
      payload: res.data,
    });
  });
};

export default countryReducer;
