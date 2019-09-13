import React from 'react';
import './SpaceStationInfo.css';

const SpaceStationInfo = ({ lat, long, velo, altitude }) => {

  return (
    <section>
      <p>The ISS's current latitude is {lat}˚</p>
      <p>The ISS's current longitude is {long}˚</p>
      <p>The ISS is currently traveling at {velo} miles per hour.</p>
      <p>the ISS is currently {altitude} miles above Earth.</p>
    </section>
  )
}

export default SpaceStationInfo;