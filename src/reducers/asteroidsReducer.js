export const asteroidsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ASTEROIDS':
      return action.asteroids;
    default:
      return state;
  }
}