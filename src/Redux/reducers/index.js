import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  // Redux-form reducer
  form: FormReducer
});

export default rootReducer;
