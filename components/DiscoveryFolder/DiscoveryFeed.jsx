import React from 'react'
import DetailedAd from './DetailedAd'
import LinkAd from './LinkAd'
import VisualAd from './VisualAd'
import { DiscoveryContainer } from './discovery.style'
const DiscoveryFeed = ({clickShow}) => {
  return (
    <DiscoveryContainer>
      <h3 style={{fontWeight: 'bold', fontSize: '2rem', position: 'sticky',marginBottom:'1rem'}}>Your Feed</h3>
      <div className='scroll-container'>
        <LinkAd click={clickShow}/>
        <VisualAd click={clickShow}/>
        <DetailedAd click={clickShow}/>
        <LinkAd click={clickShow}/>
        <VisualAd click={clickShow}/>
        <DetailedAd click={clickShow}/>
      </div>
    </DiscoveryContainer>
  )
}

export default DiscoveryFeed
