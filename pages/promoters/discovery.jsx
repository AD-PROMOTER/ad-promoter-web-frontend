import React, { useEffect, useState } from "react"
import DiscoveryPage from "@/components/DiscoveryFolder/DiscoveryPage"
import { MobileDiscovery, TabDiscovery } from "@/components/DiscoveryFolder/discovery.style"
import { withRouter } from "next/router"
import Image from "next/image"
import back from '@/public/assets/back-icon.svg'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import search from '@/public/assets/search.svg'
import Link from "next/link"
import Recent from "@/components/MobilePromoterHome/Recent"
import SavedJobs from "@/components/MobilePromoterHome/SavedJobs"
import ArrowDown from "@/public/assets/arrow-down"
import ArrowUp from "@/public/assets/arrow-up"


const Discovery = ({router}) => {
  const {query: {tab}} = router
  const tabFeed = tab === "feed" || tab == null
  const tabRecommended = tab === "recommended" 
  const [showDropdown, setShowDropdown] = useState(false)
  const [showRecentJobs, setShowRecentJobs] = useState(true)
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  return (
    <div>
        <DiscoveryPage />
        <MobileDiscovery>
          <div className="back-disc">
            {/* <div>
              <Image src={back} alt='back'/>
            </div> */}
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
        <TabDiscovery>
          <div className="style-filter">
            <div className='searchFilter'>
                <div className='search'>
                    <span>
                        <svg class="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20"
                            height="20" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971  23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                        </path>
                        </svg>
                    </span>
                    <input placeholder='Search ad niche...'/>
                </div>  
                <div className='select' onClick={() => setShowDropdown(!showDropdown)}>
                    <div>Filter</div>
                    {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
                    {showDropdown && (
                    <ul>
                        <li>Recent</li>
                        <li>Popular</li>
                        <li>Link-only Ads</li>
                        <li>Visual Ads</li>
                        <li>Detailed Ads</li>
                        <li>A week ago</li>
                        <li>Less than 2 weeks</li>
                        <li>Last 30 days</li>
                    </ul>
                )}
                </div>
            </div>
          </div>
          <div className="sort">
            <div className="tabs">
              <div className="tab-sort">
                <div className={showRecentJobs ? 'active-job' : 'non-active'} onClick={()=> setShowRecentJobs(true)}>
                  Your Feed
                </div>
              </div>
              <div className="tab-sort">
                <div className={showRecentJobs !== true ? 'active-job' : 'non-active'} onClick={()=> setShowRecentJobs(!showRecentJobs)}>
                  Recommended Jobs
                </div>
              </div>
            </div>
            <div className='arrow-sort' onClick={() => setShowSortDropdown(!showSortDropdown)}>
              <p>Sort</p>
              {showSortDropdown ? 
                <ArrowUp /> : <ArrowDown />
              }
            </div>
            {showSortDropdown && (
              <ul className="list">
                <li>Recent</li>
                <li>Two days ago</li>
                <li>A week ago</li>
                <li>Less than 2 weeks</li>
                <li>Last 30 days</li>
              </ul>
            )}
          </div>
          <div className="show-recent">
            {showRecentJobs ? <Recent /> : <SavedJobs />}
          </div>
        </TabDiscovery>
    </div>
  )
}

export default withRouter(Discovery)