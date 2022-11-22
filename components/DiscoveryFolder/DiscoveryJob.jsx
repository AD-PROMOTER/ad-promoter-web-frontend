import React from 'react'
import DetailedAdRec from './DetailedAdRec'
import { DiscoveryContainer } from './discovery.style'
import LinkAdRec from './LinkAdRec'
import VisualAdRec from './VisualAdRec'

const DiscoveryJob = ({clickShow}) => {
  return (
    <DiscoveryContainer>
      <h3 style={{fontWeight: 'bold', fontSize: '2rem', position: 'sticky',marginBottom:'1rem'}}>Recommended Jobs</h3>
      <div className="scroll-container">
        <LinkAdRec click={clickShow}/>
        <VisualAdRec click={clickShow}/>
        <DetailedAdRec click={clickShow}/>
        <LinkAdRec click={clickShow}/>
        <VisualAdRec click={clickShow}/>
        <DetailedAdRec click={clickShow}/>
      </div>
    </DiscoveryContainer>
  )
}

export default DiscoveryJob
