import { call, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../constants';
import { sendCardData } from './requests';

function* postCardRequest(payload) {
  // Request
  const { data, error } = yield call(sendCardData, payload);

  // Check existence either of valid payload or error object
  if (data) {
    console.log('Saga data response success', data);
  } else {
    console.log('Saga error', error);
  }
}

// TODO
// Use cleaner way to combine sagas
export default function* rootSaga() {
  yield takeLatest(ActionTypes.POST_CARD_DATA, postCardRequest);
}
