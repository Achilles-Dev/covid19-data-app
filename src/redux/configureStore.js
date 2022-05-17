import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countriesReducer from './countries';
import countryReducer from './country';

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
