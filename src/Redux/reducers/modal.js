import * as ActionTypes from '../constants';

const defaultState = {
  modalVisible: false,
  item: null
};

export default function (state = defaultState, { type, data }) {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return {
        modalVisible: true,
        item: data
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        modalVisible: false,
        item: null
      };
    default:
      return state;
  }
}
