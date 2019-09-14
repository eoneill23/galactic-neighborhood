import { asteroidsReducer } from './asteroidsReducer';

describe('asteroidsReducer', () => {
  it('should return the default state', () => {

    let expected = [];
    let result = asteroidsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s asteroids', () => {

    let mockAction = {
      type: 'ADD_ASTEROIDS',
      asteroids: [
        {
          name: 'Asteroid 1',
          isHazardous: true
        },
        {
          name: 'Asteroid 2',
          isHazardous: false
        }
      ]
    }

    let expected = [
      {
        name: 'Asteroid 1',
        isHazardous: true
      },
      {
        name: 'Asteroid 2',
        isHazardous: false
      }
    ];

    let result = asteroidsReducer([], mockAction);

    expect(result).toEqual(expected);
  });
});