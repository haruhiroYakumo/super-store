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

/**
 * DELETE request card with a given 'id'
 * @param payload
 * @return {Promise<*>}
 */
export const deleteCard = async (payload) => {
  try {
    return await axios.delete(`${API}/banks/cards/${payload.data}`);
  } catch (error) {
    return error;
  }
};

/**
 * UPDATE request card with a given 'id'
 * @param payload
 * @returns {Promise<*>}
 */
export const updateCard = async (payload) => {
  try {
    return await axios.put(`${API}/banks/cards/${payload.data._id}`, {
      info: payload.data.info,
      number: payload.data.number
    });
  } catch (error) {
    return error;
  }
};
