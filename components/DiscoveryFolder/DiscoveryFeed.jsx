import React from 'react'
import DetailedAd from './DetailedAd'
import LinkAd from './LinkAd'
import VisualAd from './VisualAd'
const DiscoveryFeed = ({clickShow}) => {
  return (
    <div>
      <h3 style={{fontWeight: 'bold', fontSize: '2rem'}}>Your Feed</h3>
      <LinkAd click={clickShow}/>
      <VisualAd click={clickShow}/>
      <DetailedAd click={clickShow}/>
      <LinkAd click={clickShow}/>
      <VisualAd click={clickShow}/>
      <DetailedAd click={clickShow}/>
    </div>
  )
}

export default DiscoveryFeed
