import { API_URL, API_KEY, API_KEY2 } from './config.js';
import { getJSON } from './helper.js';

export const state = {
  topMovie: [],
};

export const topMoviesList = async function () {
  try {
    const data = await getJSON(`${API_URL}/en/API/Top250Movies/${API_KEY2}`);

    const size = data.items.map(el => el);
    state.topMovie.push(size);
  } catch (err) {
    console.log(err);
  }
};
