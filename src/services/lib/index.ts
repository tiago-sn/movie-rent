import { MovieGenres } from './types';

/**
 *
 * @param s the string to be checked.
 * @param l the list of movie genres.
 */
export const checkIfStringIsMovieGengeName = (
  s: string,
  movieList: MovieGenres[]
) => (movieList.filter(genre => genre.name === s) ? true : false);
