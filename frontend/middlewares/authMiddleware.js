import {getData} from '../utils/api.js';

const api = 'http://localhost:3000';
export const auth = async () => {
  try {
    const result = await getData (`${api}/api/dashboard/check`);
    if(result.status === 200 && location.pathname === "/login"){
        window.location.href = "/dashboard"

    }
    return result;
  } catch (error) {
    throw new Error(error)
  }
};
