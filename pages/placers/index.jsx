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
const index = () => {
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
                
              </div>
            </div>
          </div>

        </DashboardSummaryContainer>
      </DashboardContainer>
      <RecentAdsContainer></RecentAdsContainer>
    </StyledHome>
  )
}

export default index