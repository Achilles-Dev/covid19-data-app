import API from './api';

const GET_ALL_COUNTRIES = 'covid19-data-app/countries/GET_ALL_COUNTRIES';
const GET_ALL_COUNTRIES_DATA = 'covid19-data-app/countries/GET_ALL_COUNTRIES_DATA';

const initialState = {
  countries: [],
  data: [],
};

const countriesReducer = (state = initialState, action) => {
  let countries;
  const { payload, date } = action;
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      countries = payload.countries.map((country) => ({
        id: country.id,
        name: country.name,
        links: country.links,
      }));
      return {
        ...state,
        countries,
      };
    case GET_ALL_COUNTRIES_DATA:
      return {
        ...state,
        data: payload.dates[date].countries,
      };
    default: return state;
  }
};

export const getAllCountries = () => (dispatch) => {
  API.getAllCountries((res) => {
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  });
};

export const getAllCountriesData = (date) => (dispatch) => {
  API.getAllCountriesData(date, (res) => {
    dispatch({
      type: GET_ALL_COUNTRIES_DATA,
      payload: res.data,
      date,
    });
  });
};

export default countriesReducer;
