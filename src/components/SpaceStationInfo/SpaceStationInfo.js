import React from 'react';

const SpaceStationInfo = ({ lat, long, velo, altitude }) => {

  return (
    <section>
      <p>The ISS's current latitude is {lat}˚</p>
      <p>The ISS's current longitude is {long}˚</p>
      <p>The ISS's current velocity is {velo}</p>
      <p>the ISS's current altitude is {altitude}</p>
    </section>
  )
}

export default SpaceStationInfo;