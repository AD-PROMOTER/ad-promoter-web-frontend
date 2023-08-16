/* eslint-disable react-hooks/exhaustive-deps */
import {
  DashboardContainer,
  DashboardSummaryContainer,
  MobilePlacers,
  StyledHome,
  TabPlacers,
} from '@/styles/placerHome.styles';
import RecentMobile from '@/components/MobilePromoterHome/Recent';
import SavedJobsMobile from '@/components/MobilePromoterHome/SavedJobs';
import MobileNotif from '@/components/MobileNotification/index';
import notif from '@/public/assets/notif.svg';
import inactiveNotif from '@/public/assets/Inactive notification Icon.svg';
import Image from 'next/image';
import hands from '@/public/assets/hands.svg';
import Placers from '@/public/assets/placers-frame';
import Placer from '@/public/assets/placers-frame.svg';
import Flash from '@/public/assets/flash';
import Cup from '@/public/assets/cup';
import cup from '@/public/assets/cupIcon.svg';
import Trend from '@/public/assets/trending-up';
import Chevron from '@/public/assets/chevron';
import ArrowDown from '@/public/assets/arrow-down';
import { StyledHomeContainer, TabContainer } from '@/styles/promoters/home';
import { useEffect, useRef, useState, useContext, useMemo } from 'react';
import ArrowUp from '@/public/assets/arrow-up';
import ScrollContainer from 'react-indiana-drag-scroll';
import more from '@/public/assets/ellipsis.svg';
import {
  BackdropContainer,
  Feed,
  ModalContainer,
} from '@/components/PromoterHomeAdDetail/styles';
import currency from '@/public/assets/money-send.svg';
import vector from '@/public/assets/Vector.svg';
import arrowUp from '@/public/assets/arrow-up.svg';
import arrowDown from '@/public/assets/arrow-down.svg';
import bell from '@/public/assets/notif.svg';
import UserContext from '@/context/userContext';
import ScrollIntoView from 'react-scroll-into-view';
import TimeAgo from '@/components/timeAgo';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Spinner, useToast } from '@chakra-ui/react';
import {
  getThirtyDaysAgoRange,
  getTwoWeeksAgoRange,
  getWeekAgoRange,
} from '@/utils/formatFilterDate';
import JobsContext from '@/context/jobsContext';
import dynamic from 'next/dynamic';
import PlacersChart from '@/components/placersChart';

const Index = () => {  
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showRecentJobs, setShowRecentJobs] = useState(true);
  const [showReport, setShowReport] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [listValue, setListValue] = useState('It has gory images');
  const [userName, setUserName] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const token = useRef('');
  const ref = useRef(null);
  const [runningAds, setRunningAds] = useState('');
  const [completeAds, setCompleteAds] = useState('');
  const [conversionGrowth, setConversionGrowth] = useState('');
  const { user } = useContext(UserContext);
  const Router = useRouter();
  const [isReportLoading, setIsReportLoading] = useState(null);
  const [clickedFilter, setClickedFilter] = useState('Sort');
  const toast = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dashboardStartDate, setDashboardStartDate] = useState('');
  const [dashboardEndDate, setDashboardEndDate] = useState('');
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const {recentJobs,setRecentJobs,isLoading,setIsLoading} = useContext(JobsContext)

  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user-detail'));
    setProfileImage(user.profilePicture);
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (user && userToken && user.role === 'placer') {
      setUserName(user.accountName);
      token.current = userToken;
    } else {
      Router.push('/login');
    }

    if (token.current) {
      Promise.all([
        fetch('https://api.ad-promoter.com/api/v1/user/dashboard', {
          headers: {
            Authorization: `Bearer ${token.current}`,
          },
        }),
      ])
        .then(([resDashboardData]) => Promise.all([resDashboardData.json()]))
        .then(([dataDashboardData]) => {
          // console.log(dataDashboardData.data);
          setRunningAds(dataDashboardData.data.adCount.runningAds);
          setCompleteAds(dataDashboardData.data.adCount.completedAds);
          setConversionGrowth(dataDashboardData.data.conversionRate);
        });
    }
  }, [Router, token]);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      token.current = userToken;
    }

    const fetchRecentJobs = async () => {
      let apiUrl = `https://api.ad-promoter.com/api/v1/ads/recent-ads?page=1&pageSize=10`;
      if (dashboardStartDate) {
        apiUrl += `&startDate=${dashboardStartDate}`;
      }
      if (dashboardEndDate) {
        apiUrl += `&endDate=${dashboardEndDate}`;
      }
      setIsLoading(true);
      const result = await axios(apiUrl, {
        headers: {
          Authorization: `Bearer ${token.current}`,
        },
      });
      setRecentJobs(result.data.data.data);
      setIsLoading(false);
    };

    if (token.current) {
      fetchRecentJobs();
    }
  }, [dashboardEndDate, dashboardStartDate]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const ClickedList = (e) => {
    setListValue(e.target.innerText);
    setShowDropdown(false);
  };

  const handleReport = async (id, report) => {
    setIsReportLoading(true);
    const response = await fetch(
      'https://api.ad-promoter.com/api/v1/reports/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.current}`,
        },
        body: JSON.stringify({
          adsId: id,
          report: report,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsReportLoading(false);
      setShowReportModal(false);
      toast({
        title: json.msg,
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }
    if (response.ok) {
      setIsReportLoading(false);
      setShowReportModal(false);
      toast({
        title: json.msg,
        status: 'success',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }
  };

  const handleShowReport = () => {
    setShowReportModal(true);
    setShowReport(false);
  };

  const handleClickedFilter = (e) => {
    setClickedFilter(e.target.innerText);

    if (e.target.innerText === 'Recent') {
      setDashboardStartDate('');
      setDashboardEndDate('');
    }
    if (e.target.innerText === 'A week ago') {
      const { startOfWeek, endOfWeek } = getWeekAgoRange();
      setDashboardStartDate(startOfWeek);
      setDashboardEndDate(endOfWeek);
    }
    if (e.target.innerText === 'Less than 2 weeks') {
      const { startOfWeek, endOfWeek } = getTwoWeeksAgoRange();
      setDashboardStartDate(startOfWeek);
      setDashboardEndDate(endOfWeek);
    }
    if (e.target.innerText === 'Last 30 days') {
      const { startOfWeek, endOfWeek } = getThirtyDaysAgoRange();
      setDashboardStartDate(startOfWeek);
      setDashboardEndDate(endOfWeek);
    }

    setShowSortDropdown(false);
  };

  const handleAdRemoval = async (id) => {
    const response = await fetch(
      `https://api.ad-promoter.com/api/v1/ads/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.current}`,
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      toast({
        title: json.msg,
        status: 'error',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }
    if (response.ok) {
      fetchFeed();
      toast({
        title: json.msg,
        status: 'success',
        duration: '5000',
        isClosable: true,
        position: 'bottom-left',
        size: 'lg',
      });
    }
  };

  const nextImage = (images) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = (images) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const summary = [
    {
      Icon: Flash,
      name: 'Running Ads',
      num: runningAds,
      bg: '#D2EFFF',
    },
    {
      Icon: Cup,
      name: 'Complete',
      num: completeAds,
      bg: '#FFE2C7',
    },
    {
      Icon: Trend,
      name: 'Overall Conv. growth',
      num: conversionGrowth,
      bg: '#FFE2E4',
    },
  ];
  
  return (
    <>
      {token.current && (
        <>
          <StyledHomeContainer>
            <StyledHome>
              <DashboardContainer>
                <div className="welcome">
                  <Image
                    src={profileImage}
                    width={'145px'}
                    height={'134px'}
                    style={{borderRadius: '16px'}}
                    alt="profile picture"
                  />
                 
                  <div className="welcome-text">
                    <h3>Hi, {userName}</h3>
                    <div className="welcome-text-sub">
                      <Image src={hands} alt="waving hands" />
                      <p>Welcome back!</p>
                    </div>

                    <div className="bell">
                      <Image src={bell} alt="notification bell" />
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
                      {summary.map(({ Icon, name, num, bg }) => (
                        <div
                          key={name}
                          className="dashboard-info-board-item"
                          style={{ backgroundColor: bg }}
                        >
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
                    <PlacersChart />
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

                  <div
                    className="sort-btn"
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                  >
                    <p>Sort</p>
                    <div className="arrow">
                      {showSortDropdown ? <ArrowDown /> : <ArrowUp />}
                    </div>
                  </div>
                  {showSortDropdown && (
                    <ul>
                      <li onClick={handleClickedFilter}>Recent</li>
                      <li onClick={handleClickedFilter}>Two days ago</li>
                      <li onClick={handleClickedFilter}>A week ago</li>
                      <li onClick={handleClickedFilter}>Less than 2 weeks</li>
                      <li onClick={handleClickedFilter}>Last 30 days</li>
                    </ul>
                  )}
                </div>
                <>
                  {recentJobs.length === 0 && isLoading ? (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="#4F00CF"
                      size="xl"
                    />
                  ) : (
                    <>
                      {recentJobs.length === 0 ? (
                        <p>No Recent Job</p>
                      ) : (
                        <ScrollContainer className="tab-body">
                          {recentJobs.map((item) => (
                            <Feed
                              bg={
                                item.type === 'direct-link'
                                  ? '#0594FB'
                                  : item.type === 'detail'
                                  ? 'var(--yellow)'
                                  : 'var(--green)'
                              }
                              key={item._id}
                            >
                              <div className="product-summary">
                                <div className="product-summary-head">
                                  <div className="ad-type-container">
                                    <div className="adtype">{item.type}</div>
                                    <div
                                      className="dot"
                                      onClick={() => setShowReport(!showReport)}
                                    >
                                      {showReport ? (
                                        <ul ref={ref}>
                                          <li onClick={handleShowReport}>
                                            Report this advert
                                          </li>
                                          <li
                                            onClick={() =>
                                              handleAdRemoval(item.id)
                                            }
                                          >
                                            Remove from feed
                                          </li>
                                        </ul>
                                      ) : (
                                        <Image src={more} alt="more" />
                                      )}
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
                                    {isReadMore
                                      ? item.description.slice(0, 156)
                                      : item.description}
                                    {item.description.length > 156 ? (
                                      <span onClick={toggleReadMore}>
                                        {isReadMore
                                          ? ' Read more'
                                          : ' Show less'}
                                      </span>
                                    ) : (
                                      <p></p>
                                    )}
                                  </p>
                                </div>
                              </div>

                              <div className="product-plan">
                                <div className="price">
                                  <div className="head">
                                    <Image src={currency} alt="currency" />
                                    <h4>Price</h4>
                                  </div>
                                  {item.type === 'detail' || 'direct-link' ? (
                                    <p>#25/Visitor</p>
                                  ) : (
                                    <p>#50/Video</p>
                                  )}
                                </div>
                                <div className="aim">
                                  <div className="head">
                                    <Image src={cup} alt="cup" />
                                    <h4>Aim</h4>
                                  </div>
                                  {item.type === 'detail' || 'direct-link' ? (
                                    <p>{item.target} Visitors</p>
                                  ) : (
                                    <p>{item.target} Videos</p>
                                  )}
                                </div>
                                <div className="achieved">
                                  <div className="head">
                                    <Image src={vector} alt="vector" />
                                    <h4>Achieved</h4>
                                  </div>
                                  {item.type === 'detail' || 'direct-link' ? (
                                    <p>{item.conversions} Visitors</p>
                                  ) : (
                                    <p>{item.conversions} Videos</p>
                                  )}
                                </div>
                              </div>

                              {item.images.length === 0 ? (
                                <></>
                              ) : (
                                <div className="product-img-container">
                                  <div className="carousel-container">
                                    <div
                                      onClick={() => previousImage(item.images)}
                                      className="left-arrow"
                                    >
                                      ❮
                                    </div>
                                    <div className="img-container">
                                      <Image
                                        src={item.images[currentIndex]}
                                        alt="product"
                                        width={360}
                                        height={236}
                                      />
                                    </div>
                                    <div
                                      onClick={() => nextImage(item.images)}
                                      className="right-arrow"
                                    >
                                      ❯
                                    </div>
                                  </div>
                                </div>
                              )}

                              <hr style={{ width: 350 }} />

                              <div className="bottom">
                                <div className="user-details">
                                  <p>
                                    Posted{' '}
                                    <TimeAgo dateTime={item.dateCreated} />
                                  </p>
                                </div>
                              </div>
                              {showReportModal && (
                                <BackdropContainer
                                  onClick={() => setShowReportModal(false)}
                                >
                                  <ModalContainer
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <div className="report">
                                      <p className="advert">Report Advert</p>
                                      <p className="reason">
                                        Tell us why you want to report this
                                        advert?
                                      </p>
                                    </div>
                                    <div className="language">
                                      Why are you reporting this advert
                                    </div>
                                    <div className="input-container">
                                      <div
                                        className="inputArea"
                                        onClick={() =>
                                          setShowDropdown(!showDropdown)
                                        }
                                      >
                                        <div className="inputText">
                                          {listValue}
                                        </div>
                                        {showDropdown ? (
                                          <Image src={arrowDown} alt="" />
                                        ) : (
                                          <Image src={arrowUp} alt="" />
                                        )}
                                      </div>
                                      {showDropdown && (
                                        <ul>
                                          <li onClick={ClickedList}>
                                            It has gory images
                                          </li>
                                          <li onClick={ClickedList}>
                                            It is a scam advert
                                          </li>
                                          <li onClick={ClickedList}>
                                            It has nudity or sexual content
                                          </li>
                                          <li onClick={ClickedList}>
                                            Other reasons
                                          </li>
                                        </ul>
                                      )}
                                    </div>
                                    <div
                                      onClick={() =>
                                        handleReport(item.id, listValue)
                                      }
                                      className="reportButton"
                                    >
                                      <button>
                                        {isReportLoading
                                          ? 'Reporting..'
                                          : 'Send Report'}
                                      </button>
                                    </div>
                                  </ModalContainer>
                                </BackdropContainer>
                              )}
                            </Feed>
                          ))}
                        </ScrollContainer>
                      )}
                    </>
                  )}
                </>
              </TabContainer>
            </StyledHome>
          </StyledHomeContainer>
          <MobilePlacers>
            {showNotif ? (
              <MobileNotif setHasNewNotification={setHasNewNotification} goBack={() => setShowNotif(false)} />
            ) : (
              <>
                <div className="welcome">
                  <div className="userProfile">
                  <div style={{ width: '52px', height: '52px' }}>
                    <Image
                      src={profileImage}
                      alt="profile picture"
                      width={'100%'}
                      height={'100%'}
                      style={{objectFit: 'fill', borderRadius: '100px' }}
                    />
                  </div>
                    <div className="username">
                      <p>Hi, {userName}</p>
                      <div className="wave">
                        <Image src={hands} alt="hands waving" />
                        <p className="greeting">Welcome back!</p>
                      </div>
                    </div>
                  </div>
                  <div className="promo">
                    {hasNewNotification ? (
                      <Image
                        src={notif}
                        alt="notification"
                        onClick={() => setShowNotif(true)}
                      />
                    ):(
                      <Image
                        src={inactiveNotif}
                        alt="notification"
                        onClick={() => setShowNotif(true)}
                      />
                    )}
                  </div>
                </div>
                <div className="dashboard-container">
                  <h2>Dashboard Summary</h2>
                  <div className="dashboard">
                    {summary.map(({ Icon, name, num, bg }) => (
                      <div
                        key={name}
                        className="info"
                        style={{ backgroundColor: bg }}
                      >
                        <div className="amount">
                          <Icon />
                          <h3>{name}</h3>
                          <p>{num}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <PlacersChart />
                
                {!isLoading && recentJobs.length!==0 && (
                  <>                
                    <div className="sort">
                      <div className="tabs">
                        <ScrollIntoView selector="#inView" className="tab-sort">
                          <div
                            className={showRecentJobs ? 'active-job' : 'non-active'}
                            onClick={() => setShowRecentJobs(true)}
                          >
                            Recent
                          </div>
                        </ScrollIntoView>
                      </div>
                      <div
                        className="arrow-sort"
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                      >
                        <p>Sort</p>
                        {showSortDropdown ? <ArrowUp /> : <ArrowDown />}
                      </div>
                      {showSortDropdown && (
                        <ul className="list">
                          <li onClick={handleClickedFilter}>Recent</li>
                          <li onClick={handleClickedFilter}>Two days ago</li>
                          <li onClick={handleClickedFilter}>A week ago</li>
                          <li onClick={handleClickedFilter}>Less than 2 weeks</li>
                          <li onClick={handleClickedFilter}>Last 30 days</li>
                        </ul>
                      )}
                    </div>
                    
                    <RecentMobile
                      dashboardStartDate={dashboardStartDate}
                      dashboardEndDate={dashboardEndDate}
                      handleShowReport={handleShowReport}
                      handleAdRemoval={handleAdRemoval}
                      showReport={showReport}
                      setShowReport={setShowReport}
                      showReportModal={showReportModal}
                      setShowReportModal={setShowReportModal}
                      showDropdown={showDropdown}
                      setShowDropdown={setShowDropdown}
                      isReadMore={isReadMore}
                      setIsReadMore={setIsReadMore}
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                      listValue={listValue}
                      setListValue={setListValue}
                      ClickedList={ClickedList}
                      toggleReadMore={toggleReadMore}
                      previousImage={previousImage}
                      nextImage={nextImage}
                    />
                  </>
                )}
              </>
            )}
          </MobilePlacers>
          <TabPlacers>
            <div className="welcome">
              <div className="userProfile">
                <div className="profile-img" style={{ borderRadius: '45%' }}>
                  <Image
                    src={profileImage}
                    width={'145px'}
                    height={'134px'}
                    style={{borderRadius: '16px'}}
                    alt="profile picture"
                  />
                </div>
                <div className="username">
                  <p>Hi, {userName}</p>
                  <div className="wave">
                    <Image src={hands} alt="hands waving" />
                    <p className="greeting">Welcome back!</p>
                  </div>
                </div>
              </div>
              <Image src={Placer} alt="bell" />
            </div>
            <div className="dashboard-summary">
              <h3>Dashboard Summary</h3>
              <div className="dashboard">
                {summary.map(({ Icon, name, num, bg }) => (
                  <div
                    key={name}
                    className="info"
                    style={{ backgroundColor: bg }}
                  >
                    <div className="amount">
                      <Icon />
                      <h3>{name}</h3>
                      <p>{num}</p>
                    </div>
                  </div>
                ))}
              </div>
              <PlacersChart />
            </div>

            {!isLoading && recentJobs.length!==0 && (
              <>              
                <div className="sort">
                  <div className="tabs">
                    <ScrollIntoView selector="#inView" className="tab-sort">
                      <div
                        className={showRecentJobs ? 'active-job' : 'non-active'}
                        onClick={() => setShowRecentJobs(true)}
                      >
                        Recent
                      </div>
                    </ScrollIntoView>
                  </div>
                  <div
                    className="arrow-sort"
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                  >
                    <p>Sort</p>
                    {showSortDropdown ? <ArrowUp /> : <ArrowDown />}
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
              </>
            )}
          </TabPlacers>
        </>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
