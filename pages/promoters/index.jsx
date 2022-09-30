import { StyledHome } from "@/styles/promoters/home"
import profile from '@/public/assets/home-profile.svg'
import wave from '@/public/assets/wave-hands.svg'
import filter from '@/public/assets/filter-icon.svg'
import Image from "next/image"
import money from '@/public/assets/money.svg'
import wallet from '@/public/assets/empty-wallet-change.svg'
import card from '@/public/assets/card-switch.svg'
import chart from '@/public/assets/chart-square.svg'
import sort from '@/public/assets/sort.svg'
import adLink from '@/public/assets/adLink.png'
import poster from '@/public/assets/poster.svg'
import firstlink from '@/public/assets/firstlink.svg'
import secondlink from '@/public/assets/secondlink.svg'
import thirdlink from '@/public/assets/thirdlink.svg'
import aimIcon from '@/public/assets/aimIcon.png'
import conversionIcon from '@/public/assets/conversionIcon.png'
import priceIcon from '@/public/assets/priceIcon.png'
const index = () => {
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

  const adTabs = [
    {
      id: 1,
      adtype: 'Directlink Ad',
      name: 'Maxim cakes and pastry',
      poster: 'Sharon Banjo',
      aim: 'Aim',
      aimRate: '1000 Visitors',
      conversion: 'Conversion',
      conversionRate: '10 Visitors',
      price: 'Price',
      priceRate: '#25/Visitor',
      description: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      notifIcon: adLink,
      posterImg: poster,
      removeAd: firstlink,
      exportAd: secondlink,
      addAd: thirdlink,
      aimIcon: aimIcon,
      conversionIcon: conversionIcon,
      priceIcon: priceIcon,
      bg: '#fff',
      time: 'Posted 1 hour ago',
    },
    {
      id: 2,
      adtype: 'Visual Ad',
      name: 'Maxim cakes and pastry',
      poster: 'Sharon Banjo',
      aim: 'Aim',
      aimRate: '1000 Visitors',
      conversion: 'Conversion',
      conversionRate: '10 Visitors',
      price: 'Price',
      priceRate: '#25/Visitor',
      description: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
      more: 'Read more',
      time: 'Posted 1 hour ago',
      notifIcon: adLink,
      posterImg: poster,
      removeAd: firstlink,
      exportAd: secondlink,
      addAd: thirdlink,
      aimIcon: aimIcon,
      conversionIcon: conversionIcon,
      priceIcon: priceIcon,
      bg: '#fff',
      linkbg: '#12a93c'
    }
  ]

  return (
    <StyledHome>

      <div className="home-dashboard">

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
            <p>Promoter</p>
          </div>
        </div>

        <div className="dashboard-summary">
          <div className="dashboard-summary-header">
            <h3>Dashboard Summary</h3>
            <Image src={filter} alt='filter icon'/>
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

      </div>

      <div className="home-ad-detail">
        {/* This is where the right part would go into */}

        <aside>
          <div className="adTab">
              <div className="switch_tab">
                <p>Recents</p>
                <p style={{width: 85}}>Saved Jobs</p>
              </div> 
              <div className="sort_btn">
                <p style={{fontWeight:'bold'}}>Sort</p>
                <Image src={sort} alt='sorticon' /> 
              </div>
          </div>

          {adTabs.map(({adtype,name,poster,aim,aimRate,conversion,conversionRate,price,priceRate,description,more,time,notifIcon,posterImg,removeAd,exportAd,addAd,aimIcon,conversionIcon,priceIcon,bg,linkbg})=>(
          <div className="notifBox" key={adTabs.id} style={{backgroundColor: bg}}>
              <div className="link-box">
                <button>{adtype}</button>
                <p><Image src={notifIcon} alt='
                notification icon' className="notifIcon" style={{height: 20, width: 20}}  /></p>
              </div>

              <div className="adPost">
                <p>{name}</p>
                  <div className="tags">
                    <p>Tags:</p>
                    <button>Confectionery</button>
                    <button>Food</button>
                  </div>
              </div>

              <div className="product">
                <div className="descr">
                  <p style={{width: 339}}>{description}</p>
                </div>
              </div>

              <div className="ad-stats">

                <div className="price">
                  <div className="price-header">
                    <Image src={priceIcon} alt='price icon' />
                    <p>{price}</p>
                  </div>
                  <div className="aim-rate">  {priceRate}
                  </div>
                </div>
              
                <div className="aim">
                  <div className="aim-header">
                    <Image src={aimIcon} alt='aim icon' />
                    <p>{aim}</p>
                  </div>
                  <div className="aim-rate">{aimRate}</div>
                </div>

                <div className="conversion">
                  <div className="conversion-header">
                    <p style={{position: 'relative', top: -2}}><Image src={conversionIcon} alt='conversion icon' /></p>
                    <p style={{position: 'relative', top: -3}}>{conversion}</p>
                  </div>
                  <div className="conversion-rate" style={{position: 'relative', top: -10}}>{conversionRate}</div>
                </div>
               </div>
              <div className="posterDetails">
                  <div className="poster">
                    <Image src={posterImg} alt='poster image'/>
                    <div>
                      <p>{poster}</p>
                    </div>
                  </div>
                  <div className="var-links">
                    <Image src={removeAd}    alt='remove ad' />
                    <Image src={exportAd} alt='export ad' />
                    <Image src={addAd} alt='new ad' />
                  </div>
              </div>

              <div className="time">
              <p style={{fontSize: 10, color: '#666666'}}>{time}</p>
              </div>
          </div>
           ))} 
         
        </aside>
      </div>
    </StyledHome>
  )
}

export default index