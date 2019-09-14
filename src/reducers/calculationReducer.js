export const calculationReducer = (state = 0, action) => {

  switch(action.type) {
    case 'ADD_CALCULATION':
      return action.calculation;
    case 'RESET_CALCULATION':
      return action.number;
    default:
      return state;
  }
}