import React, {useState} from 'react'
import { TransactionContainer } from './mobileWallet.style';
import profile from '@/public/assets/Profil.svg';
import Image from 'next/image';
import RightArrowHead from '@/public/assets/right-arrowHead.svg';
import inProgress from '@/public/assets/minus-cirlce.svg'
import failed from '@/public/assets/failed.svg'
import success from '@/public/assets/success.svg'
import refresh from "@/public/assets/retry.svg";

const transactionsData = [
    {
      name: 'Skylar Dias',
      image: profile,
      date: 'Today',
      amount: '21,000.98',
      status: failed,
    },
    {
      name: 'Skylar Dias',
      image: profile,
      date: 'Today',
      amount: '21,000.98',
      status: inProgress,
    },
    {
      name: 'Skylar Dias',
      image: profile,
      date: 'Yesterday',
      amount: '21,000.98',
      status: success,
    },
    {
      name: 'Skylar Dias',
      image: profile,
      date: '21, sept, 2019 7:30AM',
      amount: '21,000.98',
      status: success,
    },
    {
      name: 'Skylar Dias',
      image: profile,
      date: '21, sept, 2019 7:30AM',
      amount: '21,000.98',
      status: success,
    },
    {
      name: 'Skylar Dias',
      image: profile,
      date: '21, sept, 2019 7:30AM',
      amount: '21,000.98',
      status: success,
    },
];
const dropdownData = [
    {
        paymentId: "#300923201",
        invoiceDate: "21, sept, 2019",
        dueDate: "21, sept, 2019",
        datePaid: "21, sept, 2019"
    }
]
const Transaction = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }
  };
  
  return (
    <TransactionContainer show={openDropdown ? false : true}>
        {transactionsData.map((item, index) => (
            <>
             {item.status === failed ? (
                <div className='open-close'>
                    <div className='failed' key={index} onClick={toggleDropdown}>
                        <div className='profile'>
                            <Image src={item.image} alt="profile picture"/>
                            <p>{item.name}</p>
                        </div>
                        <div className='status'>
                            <div className='time'>
                                <div className='date'>
                                    <p>{item.date}</p>
                                    <span>{item.amount}</span>
                                </div>
                                <Image src={item.status} alt='status'/>
                            </div>
                            <Image src={RightArrowHead} alt='arrow'/>
                        </div>
                    </div>
                    {openDropdown && (
                        <div className='dropdown'>
                          {dropdownData.map((item, index) => (
                            <div key={index} className="drop">
                              <div key={index}>
                                <h3>Payment ID</h3>
                                <p>{item.paymentId}</p>
                              </div>
                              <div key={index}>
                                <h3>Invoice Date</h3>
                                <p>{item.invoiceDate}</p>
                              </div>
                              <div key={index}>
                                <h3>Due Date</h3>
                                <p>{item.dueDate}</p>
                              </div>
                              <div key={index}>
                                <h3>Date Paid</h3>
                                <p>{item.datePaid}</p>
                              </div>
                              <button onClick={() => setOpenDropdown(false)}>
                                <Image src={refresh} alt="Refresh icon"/>
                                <p>Retry</p>
                              </button>
                            </div>
                          ))}
                        </div>
                    )}
                </div>
             ) : (
                <div className='pass'>
                    <div className='profile'>
                        <Image src={item.image} alt='profile picture'/>
                        <p>{item.name}</p>
                    </div>
                    <div className='time'>
                        <div className='date'>
                            <p>{item.date}</p>
                            <span>{item.amount}</span>
                        </div>
                        <Image src={item.status === inProgress ? inProgress || item.status === success : success} alt='status'/>
                    </div>
                </div>
             )}
            </>
        ))}      
    </TransactionContainer>
  )
}

export default Transaction
