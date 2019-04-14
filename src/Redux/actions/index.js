import * as ActionTypes from '../constants';

/**
 * Post credit card data
 * @param data
 * @returns {{data}}
 */
export function postCard(data) {
  return {
    type: ActionTypes.POST_CARD_DATA, data
  };
}

/**
 * Request all credit cards without filter
 * @return *
 */
export function requestAllCards() {
  return {
    type: ActionTypes.GET_ALL_CARDS
  };
}

/**
 * Save all cards data in the reducer
 * @param data
 * @return {{data}}
 */
export function saveAllCards(data) {
  return {
    type: ActionTypes.SAVE_ALL_CARDS, data
  };
}

export function saveSingleCard(data) {
  return {
    type: ActionTypes.SAVE_SINGLE_CARD, data
  };
}
