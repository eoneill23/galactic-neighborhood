import React from 'react';
import './PageContainer.css';

const PageContainer = ({ fact, imgUrl, factUrl, factSite }) => {

  return (
    <section className='planet-container'>
        <img src={imgUrl} className='planet-img'/>
        <div className='planet-fact'>
        {fact}
          <p>Fact courtesy of <a href={factUrl} target='_blank'>{factSite}</a>.</p>
        </div>
    </section>
  )
}

export default PageContainer;