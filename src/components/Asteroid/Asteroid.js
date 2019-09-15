import React from 'react';
import './Asteroid.css';
import PropTypes from 'prop-types';

const Asteroid = ({ name, minDiam, maxDiam, isHazardous }) => {

  let hazardStatus = isHazardous ? 'It might be time to book that trip to Europe...' : 'No.'

  let hazardClassName = isHazardous ? 'hazardous' : 'non-hazardous'

  return (
    <article className='asteroid-container'>
      <p><span className='name-span'>NAME:</span> <span className='name'>{name}</span></p>
      <p><span className='name'>{name}</span> is estimated to be between {minDiam} & {maxDiam} miles in diameter.</p>
      <p>Is <span className='name'>{name}</span> hazardous? <span className={hazardClassName}>{hazardStatus}</span></p>
    </article>
  )
}

export default Asteroid;

Asteroid.propTypes = {
  name: PropTypes.string,
  minDiam: PropTypes.string,
  maxDiam: PropTypes.string,
  isHazardous: PropTypes.bool
}