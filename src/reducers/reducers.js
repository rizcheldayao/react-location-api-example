import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

const initialState = {
  isFetching: false,
  items: [],
  errorDetails: ''
};

const rootReducer = combineReducers({
  router: routerStateReducer
});

export default rootReducer;
