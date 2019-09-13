import React from 'react';
import './PageContainer.css';

const PageContainer = ({ fact, imgUrl, factUrl, factSite }) => {


  return (
    <section>
      <img src={imgUrl} className='planet-img'/>
      <p className='planet-fact'>{fact}</p>
      <p>Fact courtesy of <a href={factUrl}>{factSite}</a></p>
    </section>
  )
}

export default PageContainer;