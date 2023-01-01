import { DashboardContainer, DashboardSummaryContainer, RecentAdsContainer, StyledHome } from "@/styles/placerHome.styles"
import profile from '@/public/assets/placers-profile.svg'
import Image from "next/image"
import hands from '@/public/assets/hands.svg'
import Placers from '@/public/assets/placers-frame'
import Flash from '@/public/assets/flash'
import Cup from '@/public/assets/cup'
import Trend from '@/public/assets/trending-up'
import Chevron from '@/public/assets/chevron'
import ChevronRight from "@/public/assets/chevron-right"
import ChevronLeft from "@/public/assets/chevron-left"
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import ArrowDown from "@/public/assets/arrow-down"
import cup from '@/public/assets/cup.svg'
import refresh from '@/public/assets/refresh-2.svg'
import money from '@/public/assets/money-send.svg'
const index = () => {

  const RecentBody = [
    {
      adTag: 'Directlink Ad',
      businessName: 'Maxim cakes and pastery',
      tag1: 'confectionery',
      tag2: 'Food',
      details: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
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
      name: 'Overall Conv. growth',
      num: '70%',
      bg: '#FFE2E4'
    } 
  ]
  return (
    <StyledHome>
      <DashboardContainer>
        <div className="welcome">
          <div className="profile-img">
            <Image src={profile} alt='user profile picture'/>
          </div>
          <div className="welcome-text">
            <h3>Hi, Leilani Angel</h3>
            <div className="welcome-text-sub">
              <Image src={hands} alt='waving hands'/>
              <p>Welcome back!</p>
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
              <Line
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
              />
              </div>
            </div>
          </div>

        </DashboardSummaryContainer>
      </DashboardContainer>
      <RecentAdsContainer>
        <div className="header">
          <div className="text">
            <h4>Recent</h4>
            <div className="bottom-dash"></div>
          </div>
          <div className="sort">
            <h4>Sort</h4>
            <ArrowDown />
          </div>
        </div>

        <div className="body">
          {RecentBody.map(({adTag,businessName,tag1,tag2,details,conversionNo,priceVal,aimNo,timeStamp,index})=>(
            <div className="body-item" key={index}>
              <div className="head">
                <div className="tag-container">
                  <div className="ad-tag">{adTag}</div>
                  <div className="business-tag">
                    <h4>{businessName}</h4>
                    <div className="business-tag-container">
                      <p>Tags:</p>
                      <div className="tag">
                        <div className="tag-1">{tag1}</div>
                        <div className="tag-2">{tag2}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="details">{details}</p>
              </div>

              <div className="conversion-body">
                <div className="aim">
                  <div className="head">
                    <Image src={cup} alt='aim icon'/>
                    <p>Aim</p>
                  </div>
                  <p>{aimNo}</p>
                </div>
                <div className="conversion">
                  <div className="head">
                    <Image src={refresh} alt='conversion icon'/>
                    <p>Conversion</p>
                  </div>
                  <p>{conversionNo}</p>
                </div>
                <div className="price">
                  <div className="head">
                    <Image src={money} alt='money icon'/>
                    <p>Price</p>
                  </div>
                  <p>{priceVal}</p>
                </div>
              </div>
              <p className="time-stamp">{timeStamp}</p>
            </div>
          ))}
        </div>
      </RecentAdsContainer>
    </StyledHome>
  )
}

export default index