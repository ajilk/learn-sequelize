const { Genre, Movie, Actor } = require('./models');

/*
  currently, the genre table only has: Action, Adventure, and Drama
  Add one more Genre.
*/
async function insertNewGenre() {
  Genre.create({ name: 'Romance' });
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  Movie.create({ title: 'myMovie', year: '2019' })
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  return Movie.findByPk(2).get('title');
}

/*
  Return an array of all the actor names
*/
async function getAllActors() {
  const actors = await Actor.findAll()
  const actorNames = actors.map(actor => actor.get('name'));
  return actorNames

}

/*
  Return an array of all the movie names from 2008
*/
async function getAllMoviesFrom2008() {
  const movies = await Movie.findAll({ where: { year: 2008 } });
  return movies.map(movie => movie.get('title'));
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  Genre.destroy({ where: { name: 'Romance' } })
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
async function associateRosarioToEagleEye() {
  const actor = await Actor.findOne({ where: { name: 'Rosario Dawson' } })
  const movie = await Movie.findOne({ where: { title: 'Eagle Eye' } })
  actor.addMovie(movie);
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
async function associateRobertToTropicThunder() {
  const actor = await Actor.findOne({ where: { name: 'Robert Downey Jr.' } })
  const movie = await Movie.findOne({ where: { title: 'Tropic Thunder' } })
  actor.addMovie(movie);
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};