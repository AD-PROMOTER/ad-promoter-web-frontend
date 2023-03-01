import React from 'react'
import MobileDetailed from './MobileDetailed'
import MobileDirect from './MobileDirect'
import MobileVisual from './MobileVisual'
import { Container } from './style'

const Recent = () => {
  return (
    <Container>
      <MobileDirect />
      <MobileVisual />
      <MobileDetailed />
      <MobileDirect />
      <MobileVisual />
      <MobileDetailed />
    </Container>
  )
}

export default Recent