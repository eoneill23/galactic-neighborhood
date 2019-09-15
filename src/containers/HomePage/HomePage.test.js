import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, mapStateToProps, mapDispatchToProps } from './HomePage';
import { addAPOD, addAPODError, addISS, addISSError, addAsteroids, addAsteroidsError } from '../../actions/index';

describe('HomePage', () => {
  let wrapper, mockAPOD, mockAPODError, mockIss, mockIssError, mockAsteroids, mockAsteroidsError;

  beforeEach(() => {
    mockAPOD = {title: 'APOD', url: 'google.com'}
    mockAPODError = ''
    mockIss = {
      name: 'iss', 
      lat: 1, 
      lat: 2, 
      velocity: 3000,
      altitude: 400
    }
    mockIssError = ''
    mockAsteroids = [
      {name: 'Asteroid 1', 
      estimated_diameter: {
        miles: {
          estimated_diameter_min: 2,
          estimated_diameter_max: 3
        }
      },
      isHazardous: false},
      {
        name: 'Asteroid 1',
        estimated_diameter: {
          miles: {
            estimated_diameter_min: 1,
            estimated_diameter_max: 2
          }
        },
        isHazardous: true
      }
    ]
    mockAsteroidsError = ''
    wrapper = shallow(
      <HomePage 
        APOD={mockAPOD}
        mockAPODError={mockAPODError}
        iss={mockIss}
        issError={mockIssError}
        asteroids={mockAsteroids}
        asteroidsError={mockAsteroidsError}
      />
    )
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });
});