export const issErrorReducer = (state = '', action) => {
  switch(action.type) {
    case 'ISS_ERROR':
      return action.error
    default:
      return state
  }
}