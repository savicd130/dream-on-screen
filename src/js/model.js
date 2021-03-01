import { API_URL, API_KEY } from './config.js';
import { getJSON } from './helper.js';
import star from '../img/star.png';

export const state = {
  topMovie: [],
};

export const topMoviesList = async function () {
  try {
    const data = await getJSON(`${API_URL}/en/API/Top250Movies/k_1cc061uf`);

    console.log(data);
    document.querySelector('.movies').innerHTML = '';

    const markup = data.items
      .map(type => {
        return `
        <div class="card">
            <div class="card__star">
            <p class="card__star-rating">${type.imDbRating}</p>
            </div>
            <div class="card__pic">
            <img src="${type.image}" alt="${type.fullTitle}">
            </div>
            <div class="card__title">
            <p>${type.fullTitle}</p>
            </div>
        </div>
        `;
      })
      .join('');

    document.querySelector('.movies').insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err);
  }
};
