import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, mapStateToProps, mapDispatchToProps } from './HomePage';
import { fetchAPOD, fetchISS, fetchAsteroids } from '../../util/apiCalls';
import { addAPOD, addAPODError, addISS, addISSError, addAsteroids, addAsteroidsError } from '../../actions/index';
import configureStore from 'redux-mock-store';

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

  describe('mapStateToProps', () => {
    let mockState;

    beforeEach(() => {
      mockState = {
        apod: { title: 'APOD', url: 'google.com' },
        apodError: '',
        iss: {
          name: 'iss',
          lat: 1,
          lat: 2,
          velocity: 3000,
          altitude: 400
        },
        issError: '',
        asteroids: [
          {
            name: 'Asteroid 1',
            estimated_diameter: {
              miles: {
                estimated_diameter_min: 2,
                estimated_diameter_max: 3
              }
            },
            isHazardous: false
          },
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
        ],
        asteroidsError: '',
        planetFacts: {
          'Mercury': {fact: 'closest to the sun', url: 'google.com'}
        },
        calculation: 100
      }
    });

    it('should return an object with the correct parts of state', () => {
  
      let expected = {
        APOD: { title: 'APOD', url: 'google.com' },
        apodError: '',
        iss: {
          name: 'iss',
          lat: 1,
          lat: 2,
          velocity: 3000,
          altitude: 400
        },
        issError: '',
        asteroids: [
          {
            name: 'Asteroid 1',
            estimated_diameter: {
              miles: {
                estimated_diameter_min: 2,
                estimated_diameter_max: 3
              }
            },
            isHazardous: false
          },
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
        ],
        asteroidsError: ''
      };

      let mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch with an APOD when addAPOD is called', () => {

      let mockAPOD = {
        title: 'APOD', 
        url: 'google.com'
      }

      let actionToDispatch = addAPOD(mockAPOD);

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAPOD(mockAPOD);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch with an APODError when addAPODError is called', () => {

      let mockAPODError = 'Issue fetching APOD'

      let actionToDispatch = addAPODError(mockAPODError);

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAPODError(mockAPODError);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch with an ISS when addISS is called', () => {

      let mockISS = {
        name: 'iss',
        lat: 1,
        lat: 2,
        velocity: 3000,
        altitude: 400
      }

      let actionToDispatch = addISS(mockISS);

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addISS(mockISS);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch with an ISSError when addISSError is called', () => {

      let mockISSError = 'Error fetching ISS.'

      let actionToDispatch = addISSError(mockISSError);

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addISSError(mockISSError);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch with asteroids when addAsteroids is called', () => {

      let mockAsteroids = [
        {
          name: 'Asteroid 1',
          estimated_diameter: {
            miles: {
              estimated_diameter_min: 2,
              estimated_diameter_max: 3
            }
          },
          isHazardous: false
        },
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

      let actionToDispatch = addAsteroids(mockAsteroids);

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAsteroids(mockAsteroids);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch with an asteroidsError when addAsteroidsError is called', () => {

      let mockAsteroidsError = 'Error fetching asteroids.';

      let actionToDispatch = addAsteroidsError(mockAsteroidsError);
      
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAsteroidsError(mockAsteroidsError);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});