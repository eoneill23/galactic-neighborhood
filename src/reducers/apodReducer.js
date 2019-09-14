export const apodReducer = (state = null, action) => {
  switch(action.type) {
    case 'ADD_APOD':
      return action.APOD;
    default:
      return state;
  }
}