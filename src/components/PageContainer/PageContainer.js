import React from 'react';
import WeightForm from '../../containers/WeightForm/WeightForm';
import './PageContainer.css';

const PageContainer = ({ fact, imgUrl, factUrl, factSite, multiplier, calculateWeight }) => {

  return (
    <section className='planet-container'>
      <img src={imgUrl} className='planet-img'/>
      <div className='planet-fact'>
        {fact}
        <p>Fact courtesy of <a href={factUrl} target='_blank'>{factSite}</a>.</p>
        <WeightForm multiplier={multiplier} calculateWeight={calculateWeight}/>
      </div>
    </section>
  )
}

export default PageContainer;