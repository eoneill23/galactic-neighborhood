import React from 'react';
import './Asteroid.css';

const Asteroid = ({ name, minDiam, maxDiam, isHazardous }) => {

  let hazardStatus = isHazardous ? '...Might be time to book that trip to Europe.' : 'No.'

  return (
    <article className='asteroid-container'>
      <p>Name: {name}</p>
      <p>{name} is estimated to be between {minDiam} & {maxDiam} miles in diameter.</p>
      <p>Is {name} hazardous? {hazardStatus}</p>
    </article>
  )
}

export default Asteroid;