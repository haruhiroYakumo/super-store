import * as ActionTypes from '../constants';

export default function (state = [], { type, data }) {
  switch (type) {
    case ActionTypes.SAVE_ALL_CARDS:
      return {
        ...state,
        cards: data
      };
    case ActionTypes.SAVE_SINGLE_CARD:
      return {
        ...state,
        cards: [data, ...state.cards]
      };
    default:
      return state;
  }
}
