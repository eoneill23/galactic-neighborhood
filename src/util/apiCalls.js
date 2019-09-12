export const fetchAPOD = async () => {
  try {
    const response = await fetch (
      'https://api.nasa.gov/planetary/apod?api_key=wHuFmBqyaTjSnB17RczEl4c6yT5vnIVNDA0m4X1Q'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error ('Whoops! There was an issue getting the astronomy picture of the day.')
  }
}