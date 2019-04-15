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

/**
 * Save single card number
 * @param data
 * @return {{data: *, type: string}}
 */
export function saveSingleCard(data) {
  return {
    type: ActionTypes.SAVE_SINGLE_CARD, data
  };
}

/**
 * Open the modal and pass item id
 * @return *
 */
export function openModal(data) {
  return {
    type: ActionTypes.OPEN_MODAL, data
  };
}

/**
 * Close the modal
 * @return *
 */
export function closeModal() {
  return {
    type: ActionTypes.CLOSE_MODAL
  };
}

/**
 * Delete card request
 * @param data
 * @return {{data: *, type: string}}
 */
export function deleteCard(data) {
  return {
    type: ActionTypes.DELETE_CARD, data
  };
}

/**
 * Remove a single card item from reducer array
 * @param data
 * @return {{data: *, type: string}}
 */
export function deleteCardItem(data) {
  return {
    type: ActionTypes.DELETE_CARD_ITEM, data
  }
}
