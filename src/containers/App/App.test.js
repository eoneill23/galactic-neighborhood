import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { App, mapStateToProps } from './App';
import HomePage from '../HomePage/HomePage';

describe('App', () => {
  let wrapper, mockPlanetFacts;

  beforeEach(() => {
    mockPlanetFacts = {
      'Mercury': {
        fact: 'The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the north pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
        factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'
      },
      'Venus': {
        fact: 'Both Mercury and Venus have no moons, which can be considered a surprise given there are dozens of other ones around the Solar System. Saturn has over 60, for example. And some moons are little more than captured asteroids, which may have been what happened with Mars’ two moons, for example. So what makes these planets different? No one is really sure why Venus doesn’t, but there is at least one stream of research that suggests it could have had one in the past.',
        factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/480px-Venus_globe.jpg'
      },
      'Earth': {
        fact: 'We have a magnetic field surrounding our planet that protects us from the blasts of radiation and particles the Sun sends our way. Good thing, too, because such flare-ups could prove deadly to unprotected people; that’s why NASA keeps an eye on solar activity for astronauts on the International Space Station, for example. At any rate, when you see auroras shining in the sky, that’s what happens when the particles from the Sun flow along the magnetic field lines and interact with Earth’s upper atmosphere.',
        factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg'
      }
    }

    wrapper = shallow(<App planetFacts={mockPlanetFacts} />)
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    const mockState = {
      apod: { url: 'https://apod.nasa.gov/apod/image/1909/HarvestmoonGraffand.jpg' },
      apodError: '',
      iss: { latitutde: 1, longitude: 2, velocity: 27000 },
      issError: '',
      asteroids: [
        {
          name: '(U2)',
          min_diameter: 2,
          max_diameter: 3
        },
        {
          name: '(K2)',
          min_diameter: 1,
          max_diameter: 4
        }
      ],
      asteroidsError: '',
      planetFacts: {
        'Mercury': {
          fact: 'The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the north pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
          factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'
        }
      }
    }

    const expectedPlanetFacts = {
      'Mercury': {
        fact: 'The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the north pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
        factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'
      }
    }

    expect(mapStateToProps(mockState).planetFacts).toEqual(expectedPlanetFacts);
  });

});

// describe('Route', () => {
//   it('should route to the home page by default', () => {

//     const wrapper = mount(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(wrapper.find(HomePage)).toHaveLength(1);
//   });
// });