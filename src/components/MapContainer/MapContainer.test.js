import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer } from './MapContainer';

describe('MapContainer', () => {

  it('should match the snapshot with all data passed in correctly', () => {

    let wrapper = shallow(<MapContainer google={{maps: {}}} lat={1} long={2}/>);

    expect(wrapper).toMatchSnapshot();
  });
});