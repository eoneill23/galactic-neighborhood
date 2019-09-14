import { calculationReducer } from './calculationReducer';

describe('caculationReducer', () => {

  it('should return the default state', () => {

    let expected = 0;
    let result = calculationReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s calculation', () => {

    let mockAction = {
      type: 'ADD_CALCULATION',
      calculation: 200
    }

    let expected = 200;
    let result = calculationReducer(0, mockAction);

    expect(result).toEqual(expected);
  });

  it('should reset the calculation', () => {

    let mockAction = {
      type: 'RESET_CALCULATION',
      number: 0
    }

    let expected = 0;
    let result = calculationReducer(0, mockAction);

    expect(result).toEqual(expected);
  });
});