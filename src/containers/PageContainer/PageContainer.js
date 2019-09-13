import React from 'react';
import './PageContainer.css';

const PageContainer = ({ fact, imgUrl, factUrl, factSite }) => {

  return (
    <section className='planet-container'>
      <img src={imgUrl} className='planet-img'/>
      <p className='planet-fact'>
      {fact}
        <p>Fact courtesy of <a href={factUrl} target='_blank'>{factSite}</a>.</p>
      </p>
    </section>
  )
}

export default PageContainer;