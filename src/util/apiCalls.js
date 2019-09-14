import { nasaKey } from '../keys';

export const fetchAPOD = async () => {
  const response = await fetch (
    `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`
  );
  if (!response.ok) {
    throw Error('Whoops! There was an issue getting the astronomy picture of the day.')
  }
  const data = await response.json();
  return data;
}

export const fetchISS = async () => {
  const response = await fetch (
    'https://api.wheretheiss.at/v1/satellites/25544'
  );
  if (!response.ok) {
    throw Error('There was an issue finding the ISS\'s location.')
  }
  const data = await response.json();
  return data;
}

export const fetchAsteroids = async (date) => {
  const response = await fetch (
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=wHuFmBqyaTjSnB17RczEl4c6yT5vnIVNDA0m4X1Q`
  )
  if (!response.ok) {
    throw Error('There was an issue getting asteroid information.')
  }
  const data = await response.json();
  return data;
}