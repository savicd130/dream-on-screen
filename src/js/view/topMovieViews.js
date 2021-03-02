class ViewTopMovies {
  _parentEl = document.querySelector('.movies');
  _data;

  renderData(data) {
    this._data = data;
  }
  upadateOnDOM() {
    this._parentEl.innerHTML = '';
    const markup = this._data
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
  }
}

export default new ViewTopMovies();
