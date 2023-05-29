import { DashboardContainer, DashboardSummaryContainer, MobilePlacers, RecentAdsContainer, StyledHome, TabPlacers } from "@/styles/placerHome.styles"
import profile from '@/public/assets/squared-profile.png'
import profil from '@/public/assets/Profil.svg'
import RecentMobile from '@/components/MobilePromoterHome/Recent'
import SavedJobsMobile from "@/components/MobilePromoterHome/SavedJobs"
import MobileNotif from '@/components/MobileNotification/index'
import notif from '@/public/assets/notif.svg'
import Image from "next/image"
import hands from '@/public/assets/hands.svg'
import Placers from '@/public/assets/placers-frame'
import Placer from '@/public/assets/placers-frame.svg'
import Flash from '@/public/assets/flash'
import Cup from '@/public/assets/cup'
import cup from '@/public/assets/cupIcon.svg'
import Trend from '@/public/assets/trending-up'
import Chevron from '@/public/assets/chevron'
import ChevronRight from "@/public/assets/chevron-right"
import ChevronLeft from "@/public/assets/chevron-left"
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import ArrowDown from "@/public/assets/arrow-down"
// import cup from '@/public/assets/cup.svg'
import refresh from '@/public/assets/refresh-2.svg'
import money from '@/public/assets/money-send.svg'
import { StyledHomeContainer, TabContainer } from "@/styles/promoters/home"
import Link from "next/link"
import { useEffect, useRef, useState,useContext } from "react"
import ArrowUp from "@/public/assets/arrow-up"
import ScrollContainer from 'react-indiana-drag-scroll'
import more from '@/public/assets/ellipsis.svg'
import { BackdropContainer, Feed, ModalContainer } from "@/components/PromoterHomeAdDetail/styles"
import currency from '@/public/assets/money-send.svg'
import vector from '@/public/assets/Vector.svg'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import bell from '@/public/assets/notif.svg'
import adpic from '@/public/assets/adpics.png'
import UserContext from "@/context/userContext"
import ScrollIntoView from 'react-scroll-into-view'
import TimeAgo from "@/components/timeAgo"
import axios from "axios"
import { useRouter } from "next/router"


const Index = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showRecentJobs, setShowRecentJobs] = useState(true)
  const [showReport, setShowReport] = useState(false)
  const [isReadMore, setIsReadMore] = useState(true);
  const [showReportModal,setShowReportModal] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [listValue, setListValue] = useState('It has gory images')
  const [userName, setUserName] = useState('')
  const [showNotif, setShowNotif] = useState(false)
  const token = useRef('')
  const ref = useRef(null)
  const [runningAds,setRunningAds] = useState('')
  const [completeAds,setCompleteAds] = useState('')
  const [conversionGrowth,setConversionGrowth] = useState('')
  const {user} = useContext(UserContext)
  const [recentJobs,setRecentJobs] = useState()
  const [isLoading,setIsLoading] = useState(null)
  const Router = useRouter()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-detail"));
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if (user && userToken && user.role === 'placer') {
      setUserName(user.accountName);
      token.current = userToken
    }else{
      Router.push('/login')
    }

      Promise.all([
        fetch('https://api.ad-promoter.com/api/v1/user/dashboard',{
          headers:{
            Authorization: `Bearer ${token.current}`,
          }
        }),
      ])
        .then(([resDashboardData]) => 
          Promise.all([resDashboardData.json()])
        )
        .then(([dataDashboardData]) => {
          // console.log(dataDashboardData.data);
          setRunningAds(dataDashboardData.data.adCount.runningAds);
          setCompleteAds(dataDashboardData.data.adCount.completedAds);
          setConversionGrowth(dataDashboardData.data.conversionRate)
        })

  },[Router, token]);

  useEffect(()=>{
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if (userToken) {
        token.current = userToken
    }

    const fetchRecentJobs = async() =>{
        setIsLoading(true)
        const result = await axios(`https://api.ad-promoter.com/api/v1/ads/recent-ads?page=1&pageSize=10`,{
          headers:{
            Authorization: `Bearer ${token.current}`
          }
        })
        setRecentJobs(result.data.data.data)
        setIsLoading(false)
    }
    if(token.current){
        fetchRecentJobs()
    }
},[])

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const ClickedList = (e) =>{
    setListValue(e.target.innerText)
    setShowDropdown(false)
  }

  const RecentBody = [
    {
      adTag: 'Directlink Ad',
      businessName: 'Maxim cakes and pastery',
      tag1: 'confectionery',
      tag2: 'Food',
      details: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      adpic: adpic,
      aimNo: '1000 Visitors',
      conversionNo: '10 Visitors',
      priceVal: '₦25/Visitor',
      timeStamp: 'Posted 1 hour ago'
    },
    {
      adTag: 'Directlink Ad',
      businessName: 'Maxim cakes and pastery',
      tag1: 'confectionery',
      tag2: 'Food',
      details: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      adpic: adpic,
      aimNo: '1000 Visitors',
      conversionNo: '10 Visitors',
      priceVal: '₦25/Visitor',
      timeStamp: 'Posted 1 hour ago'
    },
    {
      adTag: 'Directlink Ad',
      businessName: 'Maxim cakes and pastery',
      tag1: 'confectionery',
      tag2: 'Food',
      details: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      adpic: adpic,
      aimNo: '1000 Visitors',
      conversionNo: '10 Visitors',
      priceVal: '₦25/Visitor',
      timeStamp: 'Posted 1 hour ago'
    },
    {
      adTag: 'Directlink Ad',
      businessName: 'Maxim cakes and pastery',
      tag1: 'confectionery',
      tag2: 'Food',
      details: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      adpic: adpic,
      aimNo: '1000 Visitors',
      conversionNo: '10 Visitors',
      priceVal: '₦25/Visitor',
      timeStamp: 'Posted 1 hour ago'
    },
    {
      adTag: 'Directlink Ad',
      businessName: 'Maxim cakes and pastery',
      tag1: 'confectionery',
      tag2: 'Food',
      details: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      adpic: adpic,
      aimNo: '1000 Visitors',
      conversionNo: '10 Visitors',
      priceVal: '₦25/Visitor',
      timeStamp: 'Posted 1 hour ago'
    },
  ]

  const summary = [
    {
      Icon: Flash,
      name: 'Running Ads',
      num: runningAds,
      bg: '#D2EFFF'
    },
    {
      Icon: Cup,
      name: 'Complete',
      num: completeAds,
      bg: '#FFE2C7'
    },
    {
      Icon: Trend,
      name: 'Overall Conv. growth',
      num: conversionGrowth,
      bg: '#FFE2E4'
    } 
  ]
  return (
    <>
      {token.current && (
        <>
          <StyledHomeContainer>
          <StyledHome>
            <DashboardContainer>
              <div className="welcome">
                <div className="profile-img" style={{borderRadius: '45%'}}>
                  <Image src={profile} width={145} height={134} alt='profile picture'/>
                </div>
                <div className="welcome-text">
                  <h3>Hi, {userName}</h3>
                  <div className="welcome-text-sub">
                    <Image src={hands} alt='waving hands'/>
                    <p>Welcome back!</p>
                  </div>

                <div className="bell">
                  <Image src={bell} alt="notification bell"/>
                </div>
              
                </div>
                <div className="placers-frame">
                  <Placers />
                </div>
              </div>
              <DashboardSummaryContainer>
                <div className="header-text">
                  <h3>Dashboard Summary</h3>
                </div>

                <div className="dashboard-info">
                  <div className="dashboard-info-board">
                    {summary.map(({Icon,name,num,bg})=>(
                      <div key={name} className="dashboard-info-board-item" style={{backgroundColor: bg}}>
                        <div className="dashboard-info-board-item-text">
                          <div className="dashboard-info-board-item-text-icon">
                            <Icon />
                            <h3>{name}</h3>
                          </div>
                          <h2>{num}</h2>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="dashboard-info-activity">
                    <div className="dashboard-info-activity-title">
                      <h3>Activity</h3>
                      <div className="time-filter">
                        <div className="time-week">
                          <h4>Week 1</h4>
                          <div className="chevron">
                            <Chevron />
                          </div>
                        </div>
                        <div className="month-filter">
                          <ChevronLeft />
                          <h4>Aug 2021</h4>
                          <ChevronRight />
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-info-activity-chart">
                    {/* <Line
                      data={{
                        labels: ['S', 'M', 'T', 'W', 'T', 'F','S'],
                        datasets: [
                          {
                            data: [1, 2, 3, 6],
                            backgroundColor: [
                              '#fff',
                            ],
                            borderColor: [
                              '#00B068',],
                            borderWidth: 3,
                            borderCapStyle: 'round'
                          },
                          // {
                          //   label: 'Quantity',
                          //   data: [47, 52, 67, 58, 9, 50],
                          //   backgroundColor: 'orange',
                          //   borderColor: 'red',
                          // },
                        ],
                      }}
                      height={400}
                      width={600}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                        legend: {
                          labels: {
                            fontSize: 25,
                          },
                        },
                      }}
                    /> */}
                    </div>
                  </div>
                </div>

              </DashboardSummaryContainer>
            </DashboardContainer>
            <TabContainer>
              <div className="tab-head">
                <div className="tab-container">
                  <div className="tab">
                    <p>Recent</p>
                    <div className="bottom-dash"></div>
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
              <>
                {!recentJobs ? (
                  <p>Loading...</p>
                ):(
                  <>
                    {recentJobs.length === 0 ?(
                      <p>No Recent Job</p>
                    ):(
                    <ScrollContainer className="tab-body">
                      {recentJobs.map((item)=>(
                        <Feed bg={item.type === 'direct-link' ? '#0594FB': item.type === 'detail' ? 'var(--yellow)':'var(--green)'} key={item._id}>
                          <div className="product-summary">
                            <div className="product-summary-head">
                                <div className="ad-type-container">
                                    <div className="adtype">{item.type}</div>
                                    <div className='dot' onClick={()=> setShowReport(true)}>
                                      {showReport ? (<ul ref={ref}>
                                        <li onClick={()=>setShowReportModal(true)}>Report this advert</li>
                                        <li>Remove from feed</li>
                                      </ul>) : <Image src={more} alt="more"/>}
                                    </div>
                                </div>
                                <div className="business-name-container">
                                    <h3>{item.productName}</h3>
                                    <div className="tag-container">
                                        <p>Tags:</p>
                                        <div className="tag">
                                          {item.tags.map((tag) => (
                                              <div key={tag}>{tag}</div>
                                          ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-summary-text">
                                <p>
                                    {isReadMore ? item.description.slice(0, 156) : item.description}
                                    {item.description.length > 156 ? (
                                        <span onClick={toggleReadMore}>
                                            {isReadMore ? " Read more" : " Show less"}
                                        </span>
                                    ):(
                                    <p></p>
                                    )}
                                </p>
                            </div>
                          </div>

                          <div className="product-plan">
                            <div className="price">
                              <div className="head">
                                <Image src={currency} alt="currency"/>
                                <h4>Price</h4>
                              </div>
                              {item.type === 'detail' || 'direct-link' ?(
                                <p>#25/Visitor</p>
                                ):(
                                <p>#50/Video</p>
                              )}
                            </div>
                            <div className="aim">
                              <div className="head">
                                <Image src={cup} alt="cup"/>
                                <h4>Aim</h4>
                              </div>
                              {item.type === 'detail' || 'direct-link' ?(
                                <p>{item.target} Visitors</p>
                                ):(
                                <p>{item.target} Videos</p>
                              )}
                            </div>
                            <div className="achieved">
                              <div className="head">
                                <Image src={vector} alt="vector"/>
                                <h4>Achieved</h4>
                              </div>
                              {item.type === 'detail' || 'direct-link' ?(
                                <p>{item.conversions} Visitors</p>
                                ):(
                                <p>{item.conversions} Videos</p>
                              )}
                            </div>
                          </div>

                          {item.images.length === 0 ?(
                            <></>
                            ):(
                            <div className="product-img-container">
                              <div className='carousel-container'>
                                  <div onClick={goToPrevious} className='left-arrow'>
                                      ❮
                                  </div>
                                  <div className='img-container'>
                                      <Image src={item.images[currentIndex]} alt='product'/>
                                  </div>
                                  <div onClick={goToNext} className='right-arrow'>
                                      ❯
                                  </div>
                              </div>
                            </div>
                          )}
                          
                          <hr style={{width: 350}}/>

                          <div className="bottom">
                            <div className="user-details">
                              <p>Posted <TimeAgo dateTime={item.dateCreated} /></p>
                            </div>
                          </div>
                        </Feed>
                      ))}
                    </ScrollContainer>

                    )}
                  </>
                )}          
              </>
            </TabContainer>
            
            {showReportModal && (
                <BackdropContainer onClick={()=>setShowReportModal(false)}>
                    <ModalContainer onClick={e => e.stopPropagation()}>
                        <div className='report'>
                            <p className='advert'>Report Advert</p>
                            <p className='reason'>Tell us why you want to report this advert?</p>
                        </div>
                        <div className='language'>Why are you reporting this advert</div>
                        <div className="input-container">
                            <div className='inputArea' onClick={() => setShowDropdown(!showDropdown)}>
                                <div className='inputText'>{listValue}</div>
                                {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
                            </div>
                            {showDropdown && (
                                <ul>
                                    <li onClick={ClickedList}>It has gory images</li>
                                    <li onClick={ClickedList}>It is a scam advert</li>
                                    <li onClick={ClickedList}>It has nudity or sexual content</li>
                                    <li onClick={ClickedList}>Other reasons</li>
                                </ul>
                            )}
                        </div>
                        <div className='reportButton'>
                            <button>Send Report</button>
                        </div>
                    </ModalContainer>
                </BackdropContainer>
            )}
          </StyledHome>
        </StyledHomeContainer>
        <MobilePlacers>
          {showNotif ? <MobileNotif goBack={() => setShowNotif(false)}/>: (
            <>
            <div className="welcome">
            <div className="userProfile">
              <Image src={profil} alt='profile picture'/>
              <div className="username">
                <p>Hi, Skylar Dias</p>
                <div className="wave">
                  <Image src={hands} alt='hands waving'/>
                  <p className="greeting">Welcome back!</p>                  
                </div>
              </div>             
            </div>
            <div className="promo">
              <Image src={notif} alt='notification' onClick={() => setShowNotif(true)}/>
            </div>            
          </div>
          <h2>Dashboard Summary</h2>
          <div className="dashboard">
            {summary.map(({Icon,name,num,bg})=>(
              <div key={name} className="info" style={{backgroundColor: bg}}>
                <div className="amount">
                  <Icon />
                  <h3>{name}</h3>
                  <p>{num}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="activity">
            <div className="title">
              <h3>Activity</h3>
              <div className="time-filter">
                <div className="time-week">
                  <h4>Week 1</h4>
                  <div className="chevron">
                    <Chevron />
                  </div>
                </div>
                <div className="month-filter">
                  <ChevronLeft />
                  <h4>Aug 2021</h4>
                  <ChevronRight />
                </div>
              </div>
            </div>
            <div className="chart"></div>
          </div>
          <RecentMobile />
          </>
          )}
        </MobilePlacers>
        <TabPlacers>
          <div className="welcome">
            <div className="userProfile">
              <Image src={profile} alt='profile picture'/>
              <div className="username">
                <p>Hi, Skylar Dias</p>
                <div className="wave">
                  <Image src={hands} alt='hands waving'/>
                  <p className="greeting">Welcome back!</p>                  
                </div>
              </div>             
            </div>
            <Image src={Placer} alt="bell"/>     
          </div>
          <div className="dashboard-summary">
            <h3>Dashboard Summary</h3>
            <div className="dashboard">
            {summary.map(({Icon,name,num,bg})=>(
              <div key={name} className="info" style={{backgroundColor: bg}}>
                <div className="amount">
                  <Icon />
                  <h3>{name}</h3>
                  <p>{num}</p>
                </div>
              </div>
            ))}
            </div>
            <div className="activity">
              <div className="title">
                <h3>Activity</h3>
                <div className="time-filter">
                  <div className="time-week">
                    <h4>Week 1</h4>
                    <div className="chevron">
                      <Chevron />
                    </div>
                  </div>
                  <div className="month-filter">
                    <ChevronLeft />
                    <h4>Aug 2021</h4>
                    <ChevronRight />
                  </div>
                </div>
              </div>
              <div className="chart"></div>
            </div>
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
        </TabPlacers>
        </>
      )}
    </>
  )
}

export default Index