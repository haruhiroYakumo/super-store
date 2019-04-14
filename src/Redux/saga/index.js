import { call, put, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../constants';
import { requestAllCardData, sendCardData } from './requests';
import { saveAllCards, saveSingleCard } from '../actions';

function* postCardRequest(payload) {
  // Request
  const { data, error } = yield call(sendCardData, payload);

  // Check existence either of valid payload or error object
  if (data) {
    yield put(saveSingleCard(data));
  } else {
    console.log('Saga errors', error);
  }
}

function* getAllCards() {
  const { data, error } = yield call(requestAllCardData);

  if (data) {
    yield put(saveAllCards(data));
  } else {
    console.log('Saga error', error);
  }
}

// TODO
// Use cleaner way to combine sagas
export default function* rootSaga() {
  yield takeLatest(ActionTypes.GET_ALL_CARDS, getAllCards);
  yield takeLatest(ActionTypes.POST_CARD_DATA, postCardRequest);
}
