import axios from 'axios';

import { API } from '../../Config/applicationVariables';

/**
 * POST request to save a single card number
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

/**
 * GET request all card numbers
 * @return {Promise<*>}
 */
export const requestAllCardData = async () => {
  try {
    return await axios.get(`${API}/banks/cards`);
  } catch (error) {
    return error;
  }
};
