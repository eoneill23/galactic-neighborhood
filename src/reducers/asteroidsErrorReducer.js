export const asteroidsErrorReducer = (state = '', action) => {
  switch(action.type) {
    case 'ASTEROIDS_ERROR':
      return action.error;
    default:
      return state;
  }
}