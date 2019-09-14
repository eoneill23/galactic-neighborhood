import { issReducer } from './issReducer';

describe('issReducer', () => {

  it('should return the default state', () => {

    let expected = null;
    let result = issReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s ISS', () => {

    let mockAction = {
      type: 'ADD_ISS',
      ISS: {
        name: 'iss',
        lat: 1,
        long: -4
      }
    }

    let expected = {
      name: 'iss',
      lat: 1,
      long: -4
    }

    let result = issReducer({}, mockAction);

    expect(result).toEqual(expected);
  });
});