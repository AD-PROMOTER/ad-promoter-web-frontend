import { DashboardContainer, DashboardSummaryContainer, RecentAdsContainer, StyledHome } from "@/styles/placerHome.styles"
import profile from '@/public/assets/placers-profile.svg'
import Image from "next/image"
import hands from '@/public/assets/hands.svg'
import Placers from '@/public/assets/placers-frame'
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
import { useEffect, useRef, useState } from "react"
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


const Index = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [isReadMore, setIsReadMore] = useState(true);
  const [showReportModal,setShowReportModal] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [listValue, setListValue] = useState('It has gory images')
  const ref = useRef(null)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const ClickedList = (e) =>{
    setListValue(e.target.innerText)
    setShowDropdown(false)
  }

  

  // useEffect(() => {
  //   const onClickOutside = () => {
  //       setShowReport(false)
  //   }
  //   const handleClickOutside = (event) => {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //           onClickOutside && onClickOutside();
  //       }
  //   }
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //       document.removeEventListener('click', handleClickOutside, true);
  //   }
  // }, [])

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
      num: '5',
      bg: '#D2EFFF'
    },
    {
      Icon: Cup,
      name: 'Complete',
      num: '3',
      bg: '#FFE2C7'
    },
    {
      Icon: Trend,
      name: 'Growth Rate',
      num: '70%',
      bg: '#FFE2E4'
    } 
  ]
  return (
    <StyledHomeContainer>
      <StyledHome>
        <DashboardContainer>
          <div className="welcome">
            <div className="box-welcome">
              <div className="profile-img">
                <Image src={profile} alt='user profile picture'/>
              </div>
              <div className="welcome-text">
                <h3>Hi, Leilani Angel</h3>
                <div className="welcome-text-sub">
                  <div className="profile-img">
                    <Image src={hands} alt='waving hands'/>
                  </div>
                  <p>Welcome back!</p>
                </div>
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
          <ScrollContainer className="tab-body">
            {RecentBody.map(({adTag,businessName,tag1,tag2,details,conversionNo,priceVal,aimNo,timeStamp,index})=>(
              <Feed bg='#0594FB' key={index}>
                <div className="product-summary">
                  <div className="product-summary-head">
                      <div className="ad-type-container">
                          <div className="adtype">{adTag}</div>
                          <div className='dot' onClick={()=> setShowReport(true)}>
                            {showReport ? (<ul ref={ref}>
                              <li onClick={()=>setShowReportModal(true)}>Report this advert</li>
                              <li>Remove from feed</li>
                            </ul>) : <Image src={more} alt="more"/>}
                          </div>
                      </div>
                      <div className="business-name-container">
                          <h3>{businessName}</h3>
                          <div className="tag-container">
                              <p>Tags:</p>
                              <div className="tag">
                                <div key={index}>{tag1}</div>
                                <div key={index}>{tag2}</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="product-summary-text">
                      <p>
                          {isReadMore ? details.slice(0, 156) : details}
                          {details.length > 156 ? (
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
                    <p>{priceVal}</p>
                  </div>
                  <div className="aim">
                    <div className="head">
                      <Image src={cup} alt="cup"/>
                      <h4>Aim</h4>
                    </div>
                    <p>{aimNo}</p>
                  </div>
                  <div className="achieved">
                    <div className="head">
                      <Image src={vector} alt="vector"/>
                      <h4>Achieved</h4>
                    </div>
                    <p>{conversionNo}</p>
                  </div>
                </div>

                
                <hr style={{width: 350}}/>

                <div className="bottom">
                  <div className="user-details">
                    <p>{timeStamp}</p>
                  </div>
                </div>
              </Feed>
            ))}
          </ScrollContainer>
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
  )
}

export default Index