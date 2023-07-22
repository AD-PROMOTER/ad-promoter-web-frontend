import React, { useState } from 'react'
import { Container } from './style'
import MobileSinglePlacers from './MobileSingleRecentPlacers'
import MobileSinglePromoters from './MobileSingleRecentPromoters'
import { useRouter } from 'next/router'

const Recent = ({recentJobs,handleShowReport,handleAdRemoval,showReport,setShowReport,showReportModal,setShowReportModal,showDropdown,setShowDropdown,isReadMore,setIsReadMore,currentIndex,setCurrentIndex,listValue,setListValue,ClickedList,toggleReadMore,previousImage,nextImage,isLoading,dashboardEndDate,dashboardStartDate}) => {
  const router = useRouter()
  return (
    <Container>
      {router.pathname.startsWith('/placers')?(
        <MobileSinglePlacers recentJobs={recentJobs} handleShowReport={handleShowReport} handleAdRemoval={handleAdRemoval} showReport={showReport} setShowReport={setShowReport} showReportModal={showReportModal} setShowReportModal={setShowReportModal} showDropdown={showDropdown} setShowDropdown={setShowDropdown} isReadMore={isReadMore} setIsReadMore={setIsReadMore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} listValue={listValue} setListValue={setListValue} ClickedList={ClickedList} toggleReadMore={toggleReadMore} previousImage={previousImage} nextImage={nextImage} isLoading={isLoading} dashboardStartDate={dashboardStartDate} dashboardEndDate={dashboardEndDate}/ >
      ):(
        <MobileSinglePromoters />
      )}
    </Container>
  )
}

export default Recent