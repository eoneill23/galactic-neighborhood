import React from 'react';
import { shallow } from 'enzyme';
import { PageContainer } from './PageContainer';

describe('PageContainer', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    let mockCalculateWeight = jest.fn();
    let wrapper = shallow(
    <PageContainer 
      fact={'Closest to the sun.'}
      imgUrl={'google.com'}
      factUrl={'space.com'}
      factSite={'space.com'}
      multiplier={2}
      calculateWeight={mockCalculateWeight}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});