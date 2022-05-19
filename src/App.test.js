import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailsPage from './pages/DetailsPage';
import testStore from './redux/configureStore';
import HomePage from './pages/HomePage';
import Countries from './components/Countries';
import countriesReducer from './redux/countries';

const mockStore = configureStore([]);

describe('testing HomePage and Details page', () => {
  test('renders Homepage', () => {
    render(
      <Provider store={testStore}>
        <HomePage />
      </Provider>,
    );
    expect(screen.getByText('STATS BY COUNTRY')).toBeInTheDocument();
  });

  it('renders DetailsPage', () => {
    const details = render(
      <Provider store={testStore}>
        <DetailsPage />
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  const countries = [
    {
      id: 'us',
      name: 'US',
      links: [{
        href: '/api/countries/us/regions',
        rel: 'regions',
        type: 'GET',
      }],
    },
    {
      id: 'chad',
      name: 'Chad',
      links: [{
        href: '/api/countries/chad/regions',
        rel: 'regions',
        type: 'GET',
      }],
    },
  ];

  beforeEach(() => {
    store = mockStore({
      countries,
    });
  });

  it('should render with given state from Redux store', () => {
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should return all countries', () => {
    const results = { countries: [...countries] };
    const getAllCountries = {
      type: 'covid19-data-app/countries/GET_ALL_COUNTRIES',
      payload: results,
    };

    expect(countriesReducer(undefined, getAllCountries)).toEqual({
      data: [],
      countries: [...countries],
    });
  });
});
