import React from 'react';
import './SpaceStationInfo.css';
import PropTypes from 'prop-types';

const SpaceStationInfo = ({ velo, altitude }) => {

  return (
    <section>
      <p>The ISS is currently traveling at {velo} miles per hour.</p>
      <p>The ISS is currently {altitude} miles above Earth.</p>
    </section>
  )
}

export default SpaceStationInfo;

SpaceStationInfo.propTypes = {
  velo: PropTypes.string,
  altitude: PropTypes.string
}