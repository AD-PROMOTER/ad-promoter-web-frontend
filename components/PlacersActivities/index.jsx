import React, { useState,useEffect,useRef } from 'react'
import { Container, UndoContainer } from './style'
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

const PlacersActivities = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [rowData, setRowData] = useState(gridData)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const token = useRef('')
    const id = useRef('')
    const [activities, setActivities] = useState([])
    const [totalactivities, setTotalActivities] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const revActivities = activities.reverse()

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
        setIsLoading(true)
        const result = await axios(`https://api.ad-promoter.com/api/v1/activities/all/${id.current}?page=${pageNumber}&pageSize=${activitiesPerPage}`,{
          headers:{
            Authorization: `Bearer ${token.current}`
          }
        })
        setActivities(result.data.data.data);
        setTotalActivities(result.data.data.total)
        setIsLoading(false)
      }
      if(id.current){
        fetchActivities()
      }
    },[pageNumber])

    const changeToLocalTIme = (utc) =>{
      const date = new Date(utc);
      const localTime = date.toLocaleString(); // adjust to local time zone
      return localTime;
    }

    const handleCheckbox = (e) => {
      const id = e.target.id
      const data = [...rowData]
      const checkedValue = data.map((data) => data.id === +id ? {...data, value: !data.value} : data)
      setRowData(checkedValue)
    }

    const handleDelete = () => {
      const data = [...rowData]
      const rows = data.filter(item => !item.value)
      setRowData(rows)
      if (rows.length !== data.length) {
        setShowBackdrop(true)
      }
    }
    

  return (
    <>
      <Container>
      {showBackdrop && <Backdrop onCancel={() => setShowBackdrop(false)}/>}
      <UndoContainer style={{transform: showBackdrop ? 'translateX(0)' : 'translateX(-100vw)'}}>
        <div className='activity'>Activity deleted</div>
        <div className='undo' onClick={() => setShowBackdrop(false)}>Undo</div>
      </UndoContainer> 
      {isLoading || !activities ? (
        <Spinner  />
      ):(
        <div>
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
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>User ID</th>
                <th>Action</th>
                <th>Date</th>
                <th><Image src={trash} alt='trash'/></th>
              </tr>
            </thead>
            <tbody>
              {revActivities.map((data) => (
                <tr className='row' key={data._id}>
                  <td>{activities.indexOf(data._id)}</td>
                  <td>
                    <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                      <Image src={''} alt='profile'/>
                      <p>{data.sender.accountName}</p>
                    </div>
                  </td>
                  <td>{data.sender._id}</td>
                  <td>{data.body}</td>
                  <td>{changeToLocalTIme(data.createdAt)}</td>
                  <td><input type="checkbox" id={data._id} checked={data.read} onChange={handleCheckbox}/></td>
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
    </>
  )
}

export default PlacersActivities
