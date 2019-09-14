import { asteroidsErrorReducer } from './asteroidsErrorReducer';

describe('asteroidsErrorReducer', () => {
  
  it('should return the default state', () => {

    let expected = '';
    let result = asteroidsErrorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the error', () => {

    let mockAction = {
      type: 'ASTEROIDS_ERROR',
      error: 'There was an issue fetching asteroid information.'
    }

    let expected = 'There was an issue fetching asteroid information.';
    let result = asteroidsErrorReducer('', mockAction);

    expect(result).toEqual(expected);
  });
});