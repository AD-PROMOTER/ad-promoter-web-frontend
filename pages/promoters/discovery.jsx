import React, { useEffect, useState } from "react"
import DiscoveryPage from "@/components/DiscoveryFolder/DiscoveryPage"
import { MobileDiscovery } from "@/components/DiscoveryFolder/discovery.style"
import { withRouter } from "next/router"
import Image from "next/image"
import back from '@/public/assets/back-icon.svg'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import search from '@/public/assets/search.svg'
import Link from "next/link"
import Recent from "@/components/MobilePromoterHome/Recent"
import SavedJobs from "@/components/MobilePromoterHome/SavedJobs"


const Discovery = ({router}) => {
  const {query: {tab}} = router
  const tabFeed = tab === "feed" || tab == null
  const tabRecommended = tab === "recommended" 
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div>
        <DiscoveryPage />
        <MobileDiscovery>
          <div className="back-disc">
            <div>
              <Image src={back} alt='back'/>
            </div>
            <h3>Discovery</h3>
          </div>
          <div className="search-filter">
            <div className="search-icon">
              <Image src={search} alt="search"/>
            </div>
            <div className='filter' onClick={() => setShowDropdown(!showDropdown)}>
              <p>Filter</p>
              {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
            </div>
            <input placeholder="Search ad niche..."/>
          </div>
          {showDropdown && (
            <ul>
              <li>Recent</li>
              <li>Popular</li>
              <li>Visual Ads</li>
              <li>Link-only Ads</li>
              <li>Detailed Ads</li>
              <li>A week ago</li>
              <li>Less than 2 weeks</li>
              <li>Last 30 days</li>
            </ul>
          )}
          {tabFeed && (
            <>
              <div className="feed-tab">
                <Link href={{pathname: '/promoters/discovery', query: {tab: "recommended"}}}>
                  <a>Recommended Jobs</a>
                </Link>
              </div>
              <p className="tab-para">Your Feed</p>
              <Recent />
            </>
          )}
          {tabRecommended && (
            <>
              <div className="feed-tab">
                <Link href={{pathname: '/promoters/discovery', query: {tab: "feed"}}}>
                  <a>Your Feed</a>
                </Link>
              </div>
              <p className="tab-para">Recommended Jobs</p>
              <SavedJobs />
            </>
          )}
        </MobileDiscovery>
    </div>
  )
}

export default withRouter(Discovery)