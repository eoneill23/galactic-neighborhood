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

  it('should update state on a change in the input', () => {

    const mockEvent = {target: {name: 'number', value: 100}}

    wrapper.find('input').simulate('change', mockEvent);

    expect(wrapper.state('number')).toEqual(100);
  });

  it('should call handleSubmit on a button click', () => {

    const mockEvent = {preventDefault: jest.fn()}

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().clearInputs = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should pass in the state.number and multiplier when calculateWeight is called', () => {

    const mockEvent = { preventDefault: jest.fn() }
    wrapper.setState({number: 50});

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(mockCalculateWeight).toHaveBeenCalledWith(50, 2);
  });

  it('should clear the inputs when clearInputs is called', () => {

    wrapper.setState({number: 100});

    wrapper.instance().clearInputs();

    expect(wrapper.state('number')).toEqual(0)
  });

  describe('mapStateToProps', () => {

    it('should return an object with the current calculation', () => {

      let mockState = {
        apod: {name: 'APOD', url: 'google.com'},
        apodError: '',
        iss: {name: 'iss', lat: 2, long: 3},
        issError: '',
        asteroids: [{id: 1}, {id: 2}],
        asteroidsError: '',
        planetFacts: { 'Mercury': {fact: 'closest to the sun'}},
        calculation: 100
      }

      const expected = {calculation: 100};
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    });
  });
});