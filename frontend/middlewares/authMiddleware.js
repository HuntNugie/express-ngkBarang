import {getData} from '../utils/api.js';

const api = 'http://localhost:3000';
export const auth = async () => {
  try {
    const result = await getData (`${api}/api/dashboard/check`);
    return result;
  } catch (error) {
    window.location.href = "/login"
  }
};
