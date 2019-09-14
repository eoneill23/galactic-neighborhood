import React from 'react';
import { shallow } from 'enzyme';
import SpaceStationInfo from './SpaceStationInfo';

describe('SpaceStationInfo', () => {

  it('should match the snapshot with all data passed in correctly', () => {

    const wrapper = shallow(<SpaceStationInfo 
      lat={-12.306527427889}
      long={-124.16292183888}
      velo={27556.87}
      altitude={423.78}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});