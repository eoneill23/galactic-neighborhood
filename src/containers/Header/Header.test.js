import React from 'react';
import { shallow } from 'enzyme';
import { resetStoreCalculation } from '../../actions/index';
import { Header, mapDispatchToProps } from './Header';

describe('Header', () => {
  let wrapper, mockResetStoreCalculation;

  beforeEach(() => {
    mockResetStoreCalculation = jest.fn();
    // mockDispatchNumber = 0;
    wrapper = shallow(<Header resetStoreCalculation={mockResetStoreCalculation}/>)
  })
  it('should match the snapshot with all data passed in correctly', () => {;

    expect(wrapper).toMatchSnapshot();
  });

  it('should call resetStoreCalculation when a NavLink is clicked', () => {

    wrapper.find('NavLink').at(0).simulate('click');

    expect(mockResetStoreCalculation).toHaveBeenCalledWith(0);
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with 0 when resetStoreCalculation is called', () => {

      let mockDispatchNumber = 0;
      let mockDispatch = jest.fn();

      let actionToDispatch = resetStoreCalculation(mockDispatchNumber);
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.resetStoreCalculation(mockDispatchNumber);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});