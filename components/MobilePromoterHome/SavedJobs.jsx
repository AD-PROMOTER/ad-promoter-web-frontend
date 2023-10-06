import React from 'react'
import MobileDirect from './MobileSingleSavedJob'
import { Container } from './style'

const SavedJobs = ({sortStartDate,setSortStartDate,setSortEndDate,sortEndDate}) => {
  return (
    <Container>
      <MobileDirect />
    </Container>
  )
}

export default SavedJobs