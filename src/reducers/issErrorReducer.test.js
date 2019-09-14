import { issErrorReducer } from './issErrorReducer';

describe('issErrorReducer', () => {

  it('should return the default state', () => {

    let expected = '';
    let result = issErrorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s error', () => {

    let mockAction = {
      type: 'ISS_ERROR',
      error: 'There was an error fetching ISS information'
    }

    let expected = 'There was an error fetching ISS information';
    let result = issErrorReducer('', mockAction);

    expect(result).toEqual(expected);
  });
});