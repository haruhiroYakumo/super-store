import * as ActionTypes from '../constants';

/**
 * Post credit card data
 * @param data
 * @returns {{data: *, type: string}}
 */
export function postCard(data) {
  return {
    type: ActionTypes.POST_CARD_DATA, data
  };
}
