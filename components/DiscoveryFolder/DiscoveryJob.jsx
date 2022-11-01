import React from 'react'
import DetailedAdRec from './DetailedAdRec'
import LinkAdRec from './LinkAdRec'
import VisualAdRec from './VisualAdRec'

const DiscoveryJob = ({clickShow}) => {
  return (
    <div>
      <h3 style={{fontWeight: 'bold', fontSize: '2rem'}}>Recommended Jobs</h3>
      <LinkAdRec click={clickShow}/>
      <VisualAdRec click={clickShow}/>
      <DetailedAdRec click={clickShow}/>
      <LinkAdRec click={clickShow}/>
      <VisualAdRec click={clickShow}/>
      <DetailedAdRec click={clickShow}/>
    </div>
  )
}

export default DiscoveryJob
