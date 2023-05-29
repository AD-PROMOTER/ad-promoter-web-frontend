import React from 'react'
import DetailedAd from './singleRecentJob'
import LinkAd from './singleSavedJobs'
import { Container } from './styles'
import VisualAd from './VisualAd'
import SingleRecentJob from './singleRecentJob'

const recent = () => {
  return (
    <Container>
      <SingleRecentJob />
    </Container>
  )
}

export default recent