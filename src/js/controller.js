import * as model from './model.js';
import * as ViewsMovie from './view/topMovieViews.js';

const controlTopMovie = async function () {
  model.topMoviesList();
};

const init = function () {
  controlTopMovie();
};

init();
