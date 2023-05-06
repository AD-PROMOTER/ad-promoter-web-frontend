import React from 'react'
import DetailedAd from './DetailedAd'
import LinkAd from './singleDiscoveryFeed'
import VisualAd from './VisualAd'
import { DiscoveryContainer } from './discovery.style'
import { useRef } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import SingleDiscoveryFeed from './singleDiscoveryFeed'
const DiscoveryFeed = ({clickShow,isLoading,feed}) => {
  return (
    <DiscoveryContainer>
      <h3 style={{fontWeight: 'bold', fontSize: '2rem',marginBottom:'1rem'}}>Your Feed</h3>
      <ScrollContainer className='scroll-container'>
        <SingleDiscoveryFeed isLoading={isLoading} feed={feed} click={clickShow}/>
        {/* <VisualAd click={clickShow}/>
        <DetailedAd click={clickShow}/> */}
      </ScrollContainer>
    </DiscoveryContainer>
  )
}

export default DiscoveryFeed
