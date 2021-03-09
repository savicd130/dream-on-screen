import star from '../../img/star.png';

class ViewTopMovies {
  _parentEl = document.querySelector('.movies');
  _data;

  renderData(data) {
    this._data = data;
  }
  upadateOnDOM() {
    this._parentEl.innerHTML = '';
    const markup = this._data.map((type) => {
      return `
        <div class="card">
            <div class="card__star">
            <p class="star-feature">&#9733;</p> 
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
    });

    const pages = markup.splice(0, 12).join('');
    document.querySelector('.movies').insertAdjacentHTML('beforeend', pages);
  }
}

export default new ViewTopMovies();
