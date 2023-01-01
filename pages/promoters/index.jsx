import { StyledHome, StyledHomeContainer, TabContainer } from "@/styles/promoters/home"
import profile from '@/public/assets/home-profile.svg'
import wave from '@/public/assets/wave-hands.svg'
import filter from '@/public/assets/filter-icon.svg'
import Image from "next/image"
import money from '@/public/assets/money.svg'
import wallet from '@/public/assets/empty-wallet-change.svg'
import card from '@/public/assets/card-switch.svg'
import chart from '@/public/assets/chart-square.svg'
import Recent from "../../components/PromoterHomeAdDetail/recent"
import SavedJobs from "../../components/PromoterHomeAdDetail/savedJobs"
import sort from '@/public/assets/sort.svg'
import Link from "next/link"
import { withRouter } from "next/router"
import ArrowDown from "@/public/assets/arrow-down"
import ArrowUp from "@/public/assets/arrow-up"
import { useEffect,useState } from "react"
import userStatus from '@/public/assets/promoters-logo.svg'
import ScrollContainer from 'react-indiana-drag-scroll'

const Index = ({router}) => {

  const {query: {tab}} = router

  const isTabOne = tab === "recent" || tab == null
  const isTabTwo = tab === "saved jobs"
  const [showDropdown, setShowDropdown] = useState(false)
  const [showSortDropdown, setShowSortDropdown] = useState(false)


  const summary = [
    {
      icon: money,
      name: 'Total Balance',
      price: '₦200,000.35',
      bg: '#D2EFFF'
    },
    {
      icon: wallet,
      name: 'Pending Withdrawal',
      price: '₦15,000.35',
      bg: '#FFE2C7'
    },
    {
      icon: money,
      name: 'No of jobs recieved',
      price: '200',
      bg: 'rgba(87, 159, 190, 0.2)'
    },
    {
      icon: card,
      name: 'No. of Ads Promoted',
      price: '162',
      bg: '#C8C7FF'
    },
    {
      icon: chart,
      name: 'No. of Ads Converted',
      price: '102',
      bg: '#C7FFDD'
    },
    {
      icon: chart,
      name: 'No. of Visitors',
      price: '102',
      bg: '#FFE2E4'
    },
    {
      icon: chart,
      name: 'No. of Videos accepted',
      price: '3',
      bg: '#F4D5FF'
    }
   
  ]

  


  return (
    <StyledHomeContainer>

      <StyledHome>
        <ScrollContainer className="home-dashboard">
          <div className="welcome">
            <div className="profile-img">
              <Image src={profile} alt='profile picture'/>
            </div>

            <div className="user-details">
              <p>Hi, Skylar Dias</p>
              <div className="sub-user-details">
                <Image src={wave} alt='hands waving'/>
                <p>Welcome back!</p>
              </div>
            </div>

            <div className="user-status">
              <Image src={userStatus} alt='user-status'/>
            </div>
          </div>

          <div className="dashboard-summary">
            <div className="dashboard-summary-header">
              <h3>Dashboard Summary</h3>
              
              <div className="filter" onClick={() => setShowDropdown(!showDropdown)}>
                <p>Filter</p>
                <div className="arrow-drop">
                  {showDropdown ? 
                    <ArrowDown /> : <ArrowUp />
                  }
                </div>
              </div>
              {showDropdown && (
                <ul>
                  <li>Recent</li>
                  <li>A week ago</li>
                  <li>Less than 2 weeks</li>
                  <li>Last 30 days</li>
                </ul>
              )}
            </div>

            <div className="dashboard-summary-info">
              {summary.map(({icon,name,price,bg})=>(
                <div className="dashboard-summary-info-item" key={name} style={{backgroundColor: bg}} >
                  <div className="dashboard-summary-info-item-child">
                    <div className="title">
                      <Image src={icon} alt={`${icon} icon`}/>
                      <p>{name}</p>
                    </div>
                    <h3>{price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </ScrollContainer>

        <TabContainer>
          <div className="tab-head">
            <div className="tab-container">
              <div className="tab">
                <Link href={{ pathname: "/promoters", query: { tab: "recent" } }}>
                  <a className={isTabOne ? 'active' : ''}>Recent</a>
                </Link>
                {isTabOne && (
                  <div className="bottom-dash"></div>
                )}
              </div>

              <div className="tab">
                <Link href={{ pathname: "/promoters", query: { tab: "saved jobs" } }}>
                  <a className={isTabTwo ? 'active' : ''}>Saved Jobs</a>
                </Link>
                {isTabTwo && (
                  <div className="bottom-dash"></div>
                )}
              </div>
            </div>
            
            <div className="sort-btn" onClick={() => setShowSortDropdown(!showSortDropdown)}>
              <p>Sort</p>
              <div className="arrow">
                {showSortDropdown ? 
                  <ArrowDown /> : <ArrowUp />
                }
              </div>
            </div>
            {showSortDropdown && (
              <ul>
                <li>Recent</li>
                <li>Two days ago</li>
                <li>A week ago</li>
                <li>Less than 2 weeks</li>
                <li>Last 30 days</li>
              </ul>
            )}
          </div>
          <ScrollContainer className="tab-body">
            {isTabOne && <Recent />}
            {isTabTwo && <SavedJobs />}
          </ScrollContainer>
        </TabContainer>
      </StyledHome>
    </StyledHomeContainer>
  )
}

export default withRouter(Index);
