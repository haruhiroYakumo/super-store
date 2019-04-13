import axios from 'axios';

import { API } from '../../Config/applicationVariables';

/**
 *
 * @param payload
 * @return {Promise<void>}
 */
export const sendCardData = async (payload) => {
  try {
    return await axios.post(`${API}/banks/cards`, payload.data);
  } catch (error) {
    return error;
  }
};
