export const asteroidsErrorReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_ASTEROIDS':
      return action.error;
    default:
      return state;
  }
}