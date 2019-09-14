import { apodReducer } from './apodReducer';

describe('apodReducer', () => {
  it('should return the default state', () => {

    let expected = null;
    let result = apodReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the apod', () => {

    let mockAction = {
      type: 'ADD_APOD',
      APOD: {
        title: 'apod',
        url: 'https://www.google.com'
      }
    }

    let expected = {
      title: 'apod',
      url: 'https://www.google.com'
    }

    let result = apodReducer({}, mockAction);

    expect(result).toEqual(expected);
  });
});