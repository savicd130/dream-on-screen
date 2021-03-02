import * as model from './model.js';
import ViewTopMovies from './view/topMovieViews.js';

const controlTopMovie = async function () {
  await model.topMoviesList();

  ViewTopMovies.renderData(model.state.topMovie[0]);

  ViewTopMovies.upadateOnDOM();
};

const init = function () {
  controlTopMovie();
};

init();
