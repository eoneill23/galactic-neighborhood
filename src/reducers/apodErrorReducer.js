export const apodErrorReducer = (state = '', action) => {
  switch(action.type) {
    case 'APOD_ERROR':
      return action.error;
    default:
      return state;
  }
}