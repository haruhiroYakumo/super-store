import { call, put, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../constants';
import { deleteCard, requestAllCardData, sendCardData, updateCard } from './requests';
import { closeModal, deleteCardItem, saveAllCards, saveSingleCard, updateCardItem } from '../actions';
import NavigationService from '../../ReactNavigation/NavigationService';

// This is experimental navigation dispatch action within redux-saga
// yield NavigationService.navigate('CardsScreen');

function* postCardRequest(payload) {
  const { data, error } = yield call(sendCardData, payload);

  // Check existence either of valid payload or error object
  if (data) {
    yield put(saveSingleCard(data));
    yield NavigationService.navigate('CardsScreen');
  } else {
    console.log('Saga errors ', error);
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

function* deleteCardRequest(payload) {
  const { data, error } = yield call(deleteCard, payload);

  if (data) {
    yield put(deleteCardItem(data._id));
    yield put(closeModal());
  } else {
    console.log('Saga delete card success', error);
  }
}

function* updateCardRequest(payload) {
  const { data, error } = yield call(updateCard, payload);

  if (data) {
    yield put(updateCardItem(data.card));
    yield NavigationService.navigate('CardsScreen');
  } else {
    console.log('update card saga', error);
  }
}

// TODO
// Use cleaner way to combine sagas
export default function* rootSaga() {
  yield takeLatest(ActionTypes.GET_ALL_CARDS, getAllCards);
  yield takeLatest(ActionTypes.POST_CARD_DATA, postCardRequest);
  yield takeLatest(ActionTypes.DELETE_CARD, deleteCardRequest);
  yield takeLatest(ActionTypes.UPDATE_CARD, updateCardRequest);
}
