import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, mapStateToProps, mapDispatchToProps } from './HomePage';
import { fetchAPOD, fetchISS, fetchAsteroids } from '../../util/apiCalls';
import { addAPOD, addAPODError, addISS, addISSError, addAsteroids, addAsteroidsError } from '../../actions/index';

jest.mock('../../util/apiCalls');

describe('HomePage', () => {
  let wrapper, mockAPOD, mockAPODError, mockIss, mockIssError, mockAsteroids, mockAsteroidsError, mockAddAPOD, mockAddAPODError, mockAddISS, mockAddISSError, mockAddAsteroids, mockAddAsteroidsError;

  beforeEach(() => {
    mockAddAPOD = jest.fn();
    mockAddAPODError = jest.fn();
    mockAddISS = jest.fn();
    mockAddISSError = jest.fn();
    mockAddAsteroids = jest.fn();
    mockAddAsteroidsError = jest.fn();
    mockAPOD = {title: 'APOD', url: 'google.com'};
    mockAPODError = '';
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
        addAPOD={mockAddAPOD}
        addAPODError={mockAddAPODError}
        addISS={mockAddISS}
        addISSError={mockAddISSError}
        addAsteroids={mockAddAsteroids}
        addAsteroidsError={mockAddAsteroidsError}
      />
    )
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchAPOD, fetchISS, and fetchAsteroids after mounting', () => {

    expect(fetchAPOD).toHaveBeenCalled();
    expect(fetchISS).toHaveBeenCalled();
    expect(fetchAsteroids).toHaveBeenCalled();
  });
});