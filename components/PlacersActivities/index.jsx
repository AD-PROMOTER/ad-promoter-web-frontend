import React, { useState } from 'react'
import { Container, MobileActivities, TabActivities, UndoContainer } from './style'
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import trash from '@/public/assets/trash.svg'
import Image from 'next/image'
import group from '@/public/assets/group.svg'
import { gridData } from './data'
import Backdrop from '../DiscoveryFolder/ReportModal/Backdrop'

const PlacersActivities = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [rowData, setRowData] = useState(gridData)
    const [showBackdrop, setShowBackdrop] = useState(false)

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
            <th onClick={handleDelete}><Image src={trash} alt='trash'/></th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((data) => (
            <tr className='row' key={data.id}>
              <td>{data.id}</td>
              <td>{data.name.map((name, index) => (
                <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}} key={index}>
                  <Image src={name.profile} alt='profile'/>
                  <p>{name.user}</p>
                </div>
              ))}</td>
              <td>{data.userId}</td>
              <td>{data.action}</td>
              <td>{data.date} {data.time}</td>
              <td><input type="checkbox" id={data.id} checked={data.value} onChange={handleCheckbox}/></td>
            </tr>
          ))}
        </tbody>
      </table>
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
                <Image src={item.profile}/>
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
                <Image src={item.profile}/>
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
