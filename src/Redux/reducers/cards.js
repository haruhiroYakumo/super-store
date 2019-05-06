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
      return {
        ...state,
        cards: state.cards.filter(item => item._id !== data)
      };
    case ActionTypes.UPDATE_CARD_ITEM:
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item._id === data._id) {
            return {
              ...item,
              info: data.info,
              number: data.number
            };
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
}
