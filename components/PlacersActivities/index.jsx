/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect,useRef } from 'react'
import { Container, TopContainer, UndoContainer } from './style'
import {  MobileActivities, TabActivities } from './style'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import trash from '@/public/assets/trash.svg'
import Image from 'next/image'
import group from '@/public/assets/group.svg'
import { gridData } from './data'
import Backdrop from '../DiscoveryFolder/ReportModal/Backdrop'
import axios from 'axios'
import { Spinner } from '@chakra-ui/react'
import { getThirtyDaysAgoRange, getTwoWeeksAgoRange, getWeekAgoRange } from '@/utils/formatFilterDate'

const PlacersActivities = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [rowData, setRowData] = useState(gridData)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const token = useRef('')
    const id = useRef('')
    const [activities, setActivities] = useState()
    const [totalactivities, setTotalActivities] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const [checkedItems, setCheckedItems] = useState([]);
    const [clickedFilter,setClickedFilter] = useState('Filter')
    const [dashboardStartDate,setDashboardStartDate] = useState('')
    const [dashboardEndDate,setDashboardEndDate] = useState('')

    const pageNumbers = [];
    const activitiesPerPage = 8;

    const paginate = (pageNumber) => {
      setPageNumber(pageNumber)
    }

    for(let i = 1; i<= Math.ceil(totalactivities / activitiesPerPage); i++){
      pageNumbers.push(i)
    }

    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user-detail"));
      const userToken = JSON.parse(localStorage.getItem("user-token"));
      if (user) {
        token.current = userToken
        id.current = user._id
      }

      const fetchActivities = async() =>{
        let apiUrl = `https://api.ad-promoter.com/api/v1/activities/all/${id.current}?page=${pageNumber}&pageSize=${activitiesPerPage}`;
      if (dashboardStartDate) {
        apiUrl += `&startDate=${dashboardStartDate}`;
      }
      if (dashboardEndDate) {
        apiUrl += `&endDate=${dashboardEndDate}`;
      }
        setIsLoading(true)
        const result = await axios(apiUrl,{
          headers:{
            Authorization: `Bearer ${token.current}`
          }
        })
        setActivities(result.data.data.data);
        console.log(result.data.data.data);
        setTotalActivities(result.data.data.total)
        setIsLoading(false)
      }

      if(id.current){
        fetchActivities()
      }
    },[dashboardStartDate,dashboardEndDate])

    

    const changeToLocalTIme = (utc) =>{
      const date = new Date(utc);
      const localTime = date.toLocaleString(); // adjust to local time zone
      return localTime;
    }

    const handleCheckboxChange = (itemId) => {
      const isChecked = checkedItems.includes(itemId);
  
      if (isChecked) {
        setCheckedItems(checkedItems.filter((id) => id !== itemId));
      } else {
        setCheckedItems([...checkedItems, itemId]);
      }
    };

    const handleDelete = async() => {
      const response = await fetch(`https://api.ad-promoter.com/api/v1/activities`,{
        method: "DELETE",
        headers:{
          Authorization: `Bearer ${token.current}`,
          Accept: "*/*",
          "Content-Type": "application/json"
        },
        body: {
          "activities": checkedItems
        }
      })
      const json = response.json()

      if(!response.ok){
        console.log(json);
      }
      if(response.ok){
        console.log(json);
      }
      // console.log(checkedItemsId);
    }

    const handleFilterText = (e) =>{
      setClickedFilter(e.target.innerText)
      if(e.target.innerText === 'Recent'){
        setDashboardStartDate('')
        setDashboardEndDate('')
      }
      if(e.target.innerText === 'A week ago'){
        const { startOfWeek, endOfWeek } = getWeekAgoRange();
        setDashboardStartDate(startOfWeek)
        setDashboardEndDate(endOfWeek)
      }
      if(e.target.innerText === 'Less than 2 weeks'){
        const { startOfWeek, endOfWeek } = getTwoWeeksAgoRange();
        setDashboardStartDate(startOfWeek)
        setDashboardEndDate(endOfWeek)
      }
      if(e.target.innerText === 'Last 30 days'){
        const { startOfWeek, endOfWeek } = getThirtyDaysAgoRange();
        setDashboardStartDate(startOfWeek)
        setDashboardEndDate(endOfWeek)
      }
      setShowDropdown(false)
    }
    

  return (
    <TopContainer>
      <Container>
      {showBackdrop && <Backdrop onCancel={() => setShowBackdrop(false)}/>}
      <UndoContainer style={{transform: showBackdrop ? 'translateX(0)' : 'translateX(-100vw)'}}>
        <div className='activity'>Activity deleted</div>
        <div className='undo' onClick={() => setShowBackdrop(false)}>Undo</div>
      </UndoContainer> 
      {isLoading || !activities ? (
        <div className='spinner'>
          <Spinner 
           thickness='4px'
           speed='0.65s'
           emptyColor='gray.200'
           color='#4F00CF'
           size='xl'
           />
        </div>
      ):(
        <div>
          <div className='log'>
            <p>Activity Log</p>
            <div onClick={() => setShowDropdown(!showDropdown)} className='filter'>
                <div>{clickedFilter}</div>
                {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
            </div>
            {showDropdown && (
                <ul>
                  <li onClick={handleFilterText}>Recent</li>
                  <li onClick={handleFilterText}>Popular</li>
                  <li onClick={handleFilterText}>A week ago</li>
                  <li onClick={handleFilterText}>Less than 2 weeks</li>
                  <li onClick={handleFilterText}>Last 30 days</li>
                </ul>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>User ID</th>
                <th>Action</th>
                <th>Date</th>
                <th style={{cursor:'pointer'}} onClick={()=>handleDelete(checkedItems)}><Image src={trash} alt='trash'/></th>
              </tr>
            </thead>
            <tbody>
              {[...activities].reverse().map((data,index) => (
                <tr className='row' key={data._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                      <Image src={data.sender?.profilePicture} width={36} height={36} alt='profile' style={{borderRadius: '50%'}}/>
                      <p>{data.sender.accountName}</p>
                    </div>
                  </td>
                  <td>{data.sender._id}</td>
                  <td>{data.body}</td>
                  <td>{changeToLocalTIme(data.createdAt)}</td>
                  <td><input type="checkbox" name='select' id={data._id} checked={checkedItems.includes(data._id)} onChange={() => handleCheckboxChange(data._id)}/></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {pageNumbers.map((number)=>(
            <div key={number} onClick={() => paginate(number)}>{number}</div>
          ))} */}
        </div>
      )}
    </Container>
    <MobileActivities>
      <div className='adcreator'>
        <h4>Ad creator</h4>
        <Image src={group} alt='group'/>
      </div>
      <div className='body'>
        {rowData.map((data) => (
          <div key={data.id} className='activity'>
            {data.name.map((item, index) => (
              <div key={index} className='user'>
                <Image src={item.profile}
                alt=""/>
                <h3>{item.user}</h3>
              </div>
            ))}
            <div className='userId'>
              <p>User ID</p>
              <h2>{data.userId}</h2>
            </div>
            <div className='action'>
              <p>Action</p>
              <h2>{data.action}</h2>
            </div>
            <div className='userId'>
              <p>Date</p>
              <h2>{data.date}</h2>
            </div>
            <div className='time'>
              <p>Time</p>
              <h2>{data.time}</h2>
            </div>
          </div>
        ))}
      </div>
    </MobileActivities>
    <TabActivities>
      <div className='log'>
        <p>Activity Log</p>
        <div onClick={() => setShowDropdown(!showDropdown)} className='filter'>
            <div>Filter</div>
            {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
        </div>
        {showDropdown && (
            <ul>
              <li>Recent</li>
              <li>Popular</li>
              <li>A week ago</li>
              <li>Less than 2 weeks</li>
              <li>Last 30 days</li>
            </ul>
        )}
      </div>
      <div className='body'>
        {rowData.map((data) => (
          <div key={data.id} className='activity'>
            {data.name.map((item, index) => (
              <div key={index} className='user'>
                <Image src={item.profile}
                alt=""/>
                <h3>{item.user}</h3>
              </div>
            ))}
            <div className='userId'>
              <p>User ID</p>
              <h2>{data.userId}</h2>
            </div>
            <div className='action'>
              <p>Action</p>
              <h2>{data.action}</h2>
            </div>
            <div className='userId'>
              <p>Date</p>
              <h2>{data.date}</h2>
            </div>
            <div className='time'>
              <p>Time</p>
              <h2>{data.time}</h2>
            </div>
          </div>
        ))}
      </div>
    </TabActivities>
    </TopContainer>
  )
}

export default PlacersActivities
