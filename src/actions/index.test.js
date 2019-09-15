import { addAPOD, addAPODError, addISS, addISSError, addAsteroids, addAsteroidsError, addCalculation, resetStoreCalculation } from './index';

describe('Actions', () => {

  it('should have a type of ADD_APOD', () => {

    let APOD = {
      name: 'iss',
      lat: 1,
      long: 2
    }

    let expectedAction = {
      type: 'ADD_APOD',
      APOD
    }

    expect(addAPOD(APOD)).toEqual(expectedAction);
  });

  it('should have a type of APOD_ERROR', () => {

    let error = 'Issue fetching APOD.'

    let expectedAction = {
      type: 'APOD_ERROR',
      error
    }

    expect(addAPODError(error)).toEqual(expectedAction)
  });

  it('should have a type of ADD_ISS', () => {

    let ISS = {
      name: 'ISS',
      lat: 1,
      long: 2
    }

    let expectedAction = {
      type: 'ADD_ISS',
      ISS
    }

    expect(addISS(ISS)).toEqual(expectedAction)
  });

  it('should have a type of ISS_ERROR', () => {

    let error = 'Error fetching ISS.'

    let expectedAction = {
      type: 'ISS_ERROR',
      error
    }

    expect(addISSError(error)).toEqual(expectedAction);
  });
});