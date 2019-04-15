import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import cards from './cards';
import modal from './modal';

const rootReducer = combineReducers({
  // Redux-form reducer
  form: FormReducer,

  cards,
  modal
});

export default rootReducer;
