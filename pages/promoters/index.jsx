import { MobileCotainer, StyledHome, StyledHomeContainer, TabContainer, TabletContainer } from "@/styles/promoters/home"
import profile from '@/public/assets/home-profile.svg'
import wave from '@/public/assets/wave-hands.svg'
import filter from '@/public/assets/filter-icon.svg'
import profil from '@/public/assets/Profil.svg'
import Image from "next/image"
import money from '@/public/assets/money.svg'
import wallet from '@/public/assets/empty-wallet-change.svg'
import card from '@/public/assets/card-switch.svg'
import chart from '@/public/assets/chart-square.svg'
import RecentMobile from "../../components/MobilePromoterHome/Recent"
import SavedJobsMobile from "../../components/MobilePromoterHome/SavedJobs"
import Recent from "@/components/PromoterHomeAdDetail/recent"
import SavedJobs from "@/components/PromoterHomeAdDetail/savedJobs"
import sort from '@/public/assets/sort.svg'
import Link from "next/link"
import promo from '@/public/assets/pr.svg'
import notif from '@/public/assets/notif.svg'
import { withRouter } from "next/router"
import ArrowDown from "@/public/assets/arrow-down"
import ArrowUp from "@/public/assets/arrow-up"
import { useEffect,useRef,useState } from "react"
import userStatus from '@/public/assets/promoters-logo.svg'
import MobileNotif from '@/components/MobileNotification/index'
import ScrollContainer from 'react-indiana-drag-scroll'
import ScrollIntoView from 'react-scroll-into-view'

const Index = ({router}) => {

  const {query: {tab}} = router

  // const scollToRef = useRef();

  // const scrollToView = () => {
  //   divRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   scrollToView;
  // });

  

  const isTabOne = tab === "recent" || tab == null
  const isTabTwo = tab === "saved jobs"
  const [showRecentJobs, setShowRecentJobs] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  const [userName,setUserName] = useState('')
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("token"));
    if (userName) {
      setUserName(userName.user.accountName);
    }
  });
  
  const mobileSummary = [
    {
      icon: money,
      name: 'Total Balance',
      price: '₦200,000.35',
      bg: '#D2EFFF',
      nameClass: 'balance'
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
  const tabSummary = [
    {
      icon: money,
      name: 'Total Balance',
      price: '₦200,000.35',
      bg: '#D2EFFF',
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
      name: 'No. of Videos accepted',
      price: '3',
      bg: '#F4D5FF',
    },
    {
      icon: chart,
      name: 'No. of Visitors',
      price: '102',
      bg: '#FFE2E4'
    },
    {
      icon: chart,
      name: 'No. of Ads Converted',
      price: '102',
      bg: '#C7FFDD',
      nameClass: 'balance'
    },
  ]

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

    <>
        <StyledHomeContainer>
        <StyledHome>
          <ScrollContainer className="home-dashboard">
            <div className="welcome">
              <div className="profile-img">
                <Image src={profile} alt='profile picture'/>
              </div>
  
              <div className="user-details">
                <p>Hi, {userName}</p>
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
                      <ArrowUp /> : <ArrowDown />
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
                    <ArrowUp /> : <ArrowDown />
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
      <MobileCotainer>
        {showNotif?<MobileNotif goBack={() => setShowNotif(false)}/>:(<>
        <div className="welcome">
            <div className="userProfile">
              <Image src={profil} alt='profile picture'/>
              <div className="username">
                <p>Hi, Skylar Dias</p>
                <div className="wave">
                  <Image src={wave} alt='hands waving'/>
                  <p className="greeting">Welcome back!</p>                  
                </div>
              </div>             
            </div>
            <div className="promo">
              <Image src={promo} alt='promoter'/>
              <Image src={notif} alt='notification' onClick={() => setShowNotif(true)}/>
            </div>            
          </div>
          <div className="dashboard">Dashboard Summary</div>
          <div className="summary-info">
            {mobileSummary.map((item, index)=>(
              <div key={index} className={item.nameClass ? 'balance' : 'card'} style={{backgroundColor: item.bg}}>
              <div className='amount'>
                <div className='icon'>
                  <Image src={item.icon} alt='icon'/>
                  <p>{item.name}</p>
                </div>
                <h3>{item.price}</h3>
              </div>
            </div>
            ))}
          </div>
          <div className="sort">
            <ScrollIntoView selector="#inView" className="tab-sort">
              <div onClick={()=> setShowRecentJobs(true)}>
                <p className={showRecentJobs ? 'active-job' : ''}>Recent</p>
              </div>
              {showRecentJobs && (
                <div className="dash-bottom"></div>
              )}
            </ScrollIntoView>
            <ScrollIntoView selector="#inView" className="tab-sort">
              <div onClick={()=> setShowRecentJobs(!showRecentJobs)}>
                <p className={showRecentJobs !== true ? 'active-job' : ''}>Saved Jobs</p>
              </div>
              {showRecentJobs !== true && (
                <div className="dash-bottom"></div>
              )}
            </ScrollIntoView>
            <div className={showSortDropdown ? 'arrow-sort' : 'no-sort'} onClick={() => setShowSortDropdown(!showSortDropdown)}>
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
          <div id="inView">
            {showRecentJobs ? <RecentMobile /> : <SavedJobsMobile />}
          </div>
        </>)}         
        </MobileCotainer>
        <TabletContainer>
          <div className="welcome">
            <div className="userProfile">
              <Image src={profile} alt='profile picture'/>
              <div className="username">
                <p>Hi, Skylar Dias</p>
                <div className="wave">
                  <Image src={wave} alt='hands waving'/>
                  <p className="greeting">Welcome back!</p>                  
                </div>
              </div>             
            </div>
            <Image src={userStatus} alt='user-status'/>           
          </div>
          <div className="dashboard-summary">
            <h3>Dashboard Summary</h3>
                
            <div className="filter" onClick={() => setShowDropdown(!showDropdown)}>
              <p>Filter</p>
              <div className="arrow-drop">
                {showDropdown ? 
                  <ArrowUp /> : <ArrowDown />
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
          <div className="summary-info">
            {tabSummary.map((item, index)=>(
              <div key={index} className={item.nameClass ? 'balance' : 'card'} style={{backgroundColor: item.bg}}>
              <div className='amount'>
                <div className='icon'>
                  <Image src={item.icon} alt='icon'/>
                  <p>{item.name}</p>
                </div>
                <h3>{item.price}</h3>
              </div>
            </div>
            ))}
          </div>
          <div className="sort">
            <div className="tabs">
              <ScrollIntoView selector="#inView" className="tab-sort">
                <div className={showRecentJobs ? 'active-job' : 'non-active'} onClick={()=> setShowRecentJobs(true)}>
                  Recent
                </div>
              </ScrollIntoView>
              <ScrollIntoView selector="#inView" className="tab-sort">
                <div className={showRecentJobs !== true ? 'active-job' : 'non-active'} onClick={()=> setShowRecentJobs(!showRecentJobs)}>
                  Saved Jobs
                </div>
              </ScrollIntoView>
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
          <div id="inView">
            {showRecentJobs ? <RecentMobile /> : <SavedJobsMobile />}
          </div>
        </TabletContainer>
    </>
  )
}

export default withRouter(Index);
