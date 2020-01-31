import { checkIfStringIsMovieGengeName } from './index';
import { movieGenres } from './movie_genres';

describe('lib: checkIfStringIsMovieGengeName', () => {
  console.warn('Keep the list of movie genres up to date.');
  it("The movie list includes the string 'Action'", () => {
    const s = 'Action';
    expect(checkIfStringIsMovieGengeName(s, movieGenres)).toBe(true);
  });
});
