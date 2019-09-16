import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { HomePage } from '../HomePage/HomePage';
import { addCalculation } from '../../actions/index';
import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
  let wrapper, mockPlanetFacts, mockAddCalculation;

  beforeEach(() => {
    mockAddCalculation = jest.fn();
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

    wrapper = shallow(<App planetFacts={mockPlanetFacts} addCalculation={mockAddCalculation}/>)
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should call addCalculation with the correct calculation', () => {

    wrapper.instance().calculateWeight(100, 2);

    expect(mockAddCalculation).toHaveBeenCalledWith(200);
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

  describe('mapDispatchToProps', () => {

    it('should dispatch with a calculation when addCalculation is called', () => {

      let mockCalculation = 200;
      let mockDispatch = jest.fn();

      let actionToDispatch = addCalculation(mockCalculation);
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addCalculation(mockCalculation);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});

describe('Router', () => {
  let mockStore, props, storeInstance;

  beforeEach(() => {
    mockStore = configureStore([]);
    props = {
      apod: {},
      apodError: '',
      iss: {
        name: 'iss',
        lat: 1,
        lat: 2,
        velocity: 3000,
        altitude: 400
      },
      issError: '',
      asteroids: [],
      asteroidsError: '',
      planetFacts: {
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
        },
        'Mars': {
          fact: 'What a bunch of contrasts in the inner Solar System: practically atmosphere-less Mercury, a runaway hothouse greenhouse effect happening in Venus’ thick atmosphere, temperate conditions on much of Earth and then a thin atmosphere on Mars. But look at the planet and you can see gullies carved in the past from probable water. Water requires more atmosphere, so Mars had more in the past. Where did it go? Some scientists believe it’s because the Sun’s energy pushed the lighter molecules out of Mars’ atmosphere over millions of years, decreasing the thickness over time.',
          factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg'
        },
        'Jupiter': {
          fact: 'The most massive planet in the Solar System probably had a huge influence on its history. At 318 times the mass of Earth, you can imagine that any passing asteroid or comet going near Jupiter has a big chance of being caught or diverted. Maybe Jupiter was partly to blame for the great bombardment of small bodies that peppered our young Solar System early in its history, causing scars you can still see on the Moon today. And in 1994, astronomers worldwide were treated to a rare sight: a comet, Shoemaker-Levy 9, breaking up under Jupiter’s gravity and slamming into the atmosphere.',
          factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg'
        },
        'Saturn': {
          fact: 'There’s a field of ice and rock debris circling Saturn that from afar, appear as rings. Early telescope observations of the planet in the 1600s caused some confusion: does that planet have ears, or moons, or what? With better resolution, however, it soon became clear that there was a chain of small bodies encircling the gas giant. It’s possible that a single moon tore apart under Saturn’s strong gravity and produced the rings. Or, maybe they’ve been around (pun intended) for the last few billion years, unable to coalesce into a larger body but resistant enough to gravity not to break up.',
          factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
          imgUrl: 'https://photojournal.jpl.nasa.gov/jpeg/PIA01364.jpg'
        },
        'Uranus': {
          fact: 'When Voyager 2 flew by the planet in the 1980s, scientists saw a mostly featureless blue ball and some assumed there wasn’t much activity going on on Uranus. We’ve had a better look at the data since then that does show some interesting movement in the southern hemisphere. Additionally, the planet drew closer to the Sun in 2007, and in more recent years telescope probing has shown some storms going on. What is causing all this activity is difficult to say unless we were to send another probe that way. And unfortunately, there are no missions yet that are slated for sure to zoom out to that part of the Solar System.',
          factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
        },
        'Neptune': {
          fact: 'While on Earth we are concerned about hurricanes, the strength of these storms is nowhere near what you would find on Neptune. At its highest altitudes, according to NASA, winds blow at more than 1,100 miles per hour (1,770 kilometers per hour). To put that in context, that’s faster than the speed of sound on Earth, at sea level. Why Neptune is so blustery is a mystery, especially considering the Sun’s heat is so little at its distance.',
          factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/768px-Neptune_Full.jpg'
        },
        'Pluto': {
          fact: 'Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar system. It is also one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune thought to be populated by hundreds of thousands of rocky, icy bodies each larger than 62 miles (100 kilometers) across, along with 1 trillion or more comets.',
          factUrl: 'https://www.space.com/43-pluto-the-ninth-planet-that-was-a-dwarf.html',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Pluto_by_LORRI_and_Ralph%2C_13_July_2015.jpg'
        }
      },
      calculation: 0
    }
    storeInstance = mockStore(props)
  });
  it('should route to the home page by default', () => {

    const wrapper = mount(
      <Provider store={storeInstance}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(HomePage)).toHaveLength(1);
  });

  // it('/mercury should render PageContainer with Mercury', () => {

  //   const wrapper = mount(
  //     <Provider store={storeInstance}>
  //       <MemoryRouter initialEntries={['/mercury']}>
  //         <App />
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   expect(wrapper.find(PageContainer)).toHaveLength(1);
  // });
});