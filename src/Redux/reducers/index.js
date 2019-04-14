import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import cards from './cards';

const rootReducer = combineReducers({
  // Redux-form reducer
  form: FormReducer,

  cards
});

export default rootReducer;
