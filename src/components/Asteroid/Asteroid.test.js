import React from 'react';
import { shallow } from 'enzyme';
import Asteroid from './Asteroid';

describe('Asteroid', () => {
  it('should match the snapshot with isHazardous set to false', () => {
    const falseWrapper = shallow(<Asteroid 
      name={'Big boy'}
      minDiam={'.002'}
      maxDiam={'.05'}
      isHazardous={false}
    />);

    expect(falseWrapper).toMatchSnapshot();
  });

  it('should match the snapshot with isHazardous set to true', () => {
    const trueWrapper = shallow(<Asteroid
      name={'Medium boy'}
      minDiam={'.003'}
      maxDiam={'.07'}
      isHazardous={true}
    />);

    expect(trueWrapper).toMatchSnapshot();
  });
});