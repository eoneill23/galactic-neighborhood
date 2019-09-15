import React from 'react';
import { shallow } from 'enzyme';
import { WeightForm, mapStateToProps } from './WeightForm';

describe('WeightForm', () => {
  let wrapper, mockCalculateWeight;

  beforeEach(() => {
    mockCalculateWeight = jest.fn();
    wrapper = shallow(
      <WeightForm 
      calculation={100}
      multiplier={2}
      calculateWeight={mockCalculateWeight}
      />
    );
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  
});