import { apodErrorReducer } from './apodErrorReducer';

describe('apodErrorReducer', () => {

  it('should return the default state', () => {
    
    let expected = '';
    let result = apodErrorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s error', () => {

    let mockAction = {
      type: 'APOD_ERROR',
      error: 'There was an issue fetching the apod.'
    }

    let expected = 'There was an issue fetching the apod.'

    let result = apodErrorReducer('', mockAction);
    expect(result).toEqual(expected);
  });
});