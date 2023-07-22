import React from 'react'
import DetailedAdRec from './DetailedAdRec'
import { DiscoveryContainer } from './discovery.style'
import LinkAdRec from './singleDiscoveryRecommended'
import VisualAdRec from './VisualAdRec'
import ScrollContainer from 'react-indiana-drag-scroll'
import SingleDiscoveryRecommended from './singleDiscoveryRecommended'

const DiscoveryJob = ({clickShow,isLoading,recommendedJobs,fetchRecommended}) => {
  return (
    <DiscoveryContainer>
      <ScrollContainer className="scroll-container">
        <SingleDiscoveryRecommended isLoading={isLoading} recommendedJobs={recommendedJobs} fetchRecommended={fetchRecommended} click={clickShow}/>
        {/* <VisualAdRec click={clickShow}/>
        <DetailedAdRec click={clickShow}/> */}
      </ScrollContainer>
    </DiscoveryContainer>
  )
}

export default DiscoveryJob
