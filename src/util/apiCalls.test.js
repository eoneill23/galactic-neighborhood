import { fetchAPOD, fetchISS, fetchAsteroids } from './apiCalls';

describe('fetchAPOD', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      copyright: "Jean-Francois Graffand",
      date: "2019-09-13",
      explanation: "Famed in festival, story, and song the best known full moon is the Harvest Moon. For northern hemisphere dwellers that's a traditional name of the farthest full moon to the September equinox. In most North America time zones this year's Harvest Moon will officially rise on Friday, September 13. In fact the same Harvest Moon will rise on September 14 for much of the planet though. Of course the Moon will look almost full in the surrounding days. Regardless of your time zone the Harvest Moon, like any other full moon, will rise just opposite the setting Sun. Near the horizon, the Moon Illusion might make it appear bigger and brighter to you but this Harvest Moon will be near lunar apogee. That's the farthest point in its orbit, making it the most distant, and so the smallest, full moon of the year. On August 15 a wheat field harvested in south central France made this a harvest moon scene too, the full moon shining on with beautiful iridescent clouds at sunset.",
      hdurl: "https://apod.nasa.gov/apod/image/1909/HarvestmoonGraffand.jpg",
      media_type: "image",
      service_version: "v1",
      title: "A Harvest Moon",
      url: "https://apod.nasa.gov/apod/image/1909/HarvestmoonGraffand.jpg"
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct Url', () => {

    fetchAPOD();

    expect(window.fetch).toHaveBeenCalledWith('https://api.nasa.gov/planetary/apod?api_key=wHuFmBqyaTjSnB17RczEl4c6yT5vnIVNDA0m4X1Q')
  });

  it('should return the correct APOD (HAPPY) :)', () => {

    fetchAPOD()
    .then(results => expect(results).toEqual(mockResponse))
  });

  it('should throw an error the response status is not ok (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(fetchAPOD()).rejects.toEqual(Error('Whoops! There was an issue getting the astronomy picture of the day.'))
  });

  it('should throw and error if the promise rejects (HAPPY) :)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Whoops! There was an issue getting the astronomy picture of the day.'
      });
    });

    expect(fetchAPOD()).rejects.toEqual({ message: 'Whoops! There was an issue getting the astronomy picture of the day.' })
  });
});

describe('fetchISS', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      name: "iss",
      id: 25544,
      latitude: -51.661292345012,
      longitude: -43.453413177708,
      altitude: 436.22924401495,
      velocity: 27533.257865622,
      visibility: "daylight",
      footprint: 4589.1257875495,
      timestamp: 1568392577,
      daynum: 2458740.1918634,
      solar_lat: 3.7193363862095,
      solar_lon: 289.92197721244,
      units: "kilometers"
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });
});