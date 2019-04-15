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
    case ActionTypes.DELETE_CARD_ITEM:
      console.log('Reducer ', state.cards, data);
      return {
        ...state,
        cards: state.cards.filter(item => item._id !== data)
      };
    default:
      return state;
  }
}
