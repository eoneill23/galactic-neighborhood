export const addAPOD = APOD => ({
  type: 'ADD_APOD',
  APOD
});

export const addAPODError = error => ({
  type: 'APOD_ERROR',
  error
});

export const addISS = ISS => ({
  type: 'ADD_ISS',
  ISS
});

export const addISSError = error => ({
  type: 'ISS_ERROR',
  error
});

export const addAsteroids = asteroids => ({
  type: 'ADD_ASTEROIDS',
  asteroids
});

export const addAsteroidsError = error => ({
  type: 'ASTEROIDS_ERROR',
  error
});

export const addCalculation = calculation => ({
  type: 'ADD_CALCULATION',
  calculation
});

export const resetStoreCalculation = number => ({
  type: 'RESET_CALCULATION',
  number
});