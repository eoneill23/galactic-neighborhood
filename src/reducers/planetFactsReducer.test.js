import { planetFactsReducer } from './planetFactsReducer';

describe('planetFactsReducer', () => {

  it('should return the default state', () => {

    let mockDefaultState = {
      'Mercury': {
        fact: 'The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the north pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
        factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'
      }
    }

    let expected = {
      'Mercury': {
        fact: 'The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the north pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
        factUrl: 'https://www.universetoday.com/33415/interesting-facts-about-the-planets/',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'
      }
    }

    let result = planetFactsReducer(mockDefaultState, {});

    expect(result).toEqual(expected);
  });
});