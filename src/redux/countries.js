import API from './api';

const GET_ALL_COUNTRIES = 'covid19-data-app/countries/GET_ALL_COUNTRIES';
const GET_ALL_COUNTRIES_DATA = 'covid19-data-app/countries/GET_ALL_COUNTRIES_DATA';
const GET_COUNTRY_BY_NAME = 'covid19-data-app/countries/GET_COUNTRY_BY_NAME';

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
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: state.countries.countries.filter((country) => country.name === payload),
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

export const getCountryByName = (name) => (dispatch) => {
  dispatch({
    type: GET_COUNTRY_BY_NAME,
    payload: name,
  });
};

export default countriesReducer;
