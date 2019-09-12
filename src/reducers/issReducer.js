export const issReducer = (state = null, action) => {
  switch(action.type) {
    case 'ADD_ISS':
      return action.ISS
    default:
      return state
  }
}