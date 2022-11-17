import { useState } from 'react';

import Image from 'next/image';
import trash from '@/public/assets/trash.svg';
import profile from '@/public/assets/Profil.svg';
import documentDownload from '@/public/assets/document-download.svg';
import rightArrow from '@/public/assets/arrow-right.svg';
import { TransactionHistoryStyles } from '../styles/transaction';
import Transaction from './transaction';
import { TransactionStyles } from '../styles/transaction';
import TransactionDropdown from './transactionDropdown';

const transactionsData = [
  {
    image: profile,
    date: 'Today',
    amount: '21,000.98',
    status: 'FAILED',
  },
  {
    image: profile,
    date: 'Today',
    amount: '21,000.98',
    status: 'IN PROGRESS',
  },
  {
    image: profile,
    date: 'Yesterday',
    amount: '21,000.98',
    status: 'COMPLETE',
  },
  {
    image: profile,
    date: '21, sept, 2019 7:30AM',
    amount: '21,000.98',
    status: 'COMPLETE',
  },
  {
    image: profile,
    date: '21, sept, 2019 7:30AM',
    amount: '21,000.98',
    status: 'COMPLETE',
  },
  {
    image: profile,
    date: '21, sept, 2019 7:30AM',
    amount: '21,000.98',
    status: 'COMPLETE',
  },
];

const TransactionHistory = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }
  };

  return (
    <TransactionHistoryStyles>
      <div className="intro">
        <h1>Transaction History</h1>
        <button>
          <div className="statement">
            <Image src={documentDownload} alt="Document download icon" />
            <p>Request Statement</p>
          </div>
        </button>
      </div>
      <div className="transactionContainer">
        {/* <TransactionDropdown/> */}
        {transactionsData.map((transactionData, i) => (
          <>
            {transactionData.status === 'FAILED' ? (
              <TransactionStyles show={openDropdown ? true : false} key={i}>
                <div className="container">
                  <div className="container__profile">
                    <Image
                      className="profile__img"
                      src={transactionData.image}
                      alt="User's profile image"
                    />
                    <p>Skylar Dias</p>
                  </div>
                  <div className="container__transaction">
                    <div className="">{transactionData.date}</div>
                    <div className="">-&#8358;{transactionData.amount}</div>
                  </div>
                  <div>
                    <button className="failed">{transactionData.status}</button>
                  </div>
                  <div style={{paddingTop: "1.5rem"}}>
                    <Image
                      src={rightArrow}
                      alt=""
                      width={24}
                      onClick={toggleDropdown}
                      className={
                        openDropdown
                          ? 'container__rotate container__arrow'
                          : 'container__arrow'
                      }
                    />
                  </div>
                </div>
                {openDropdown ? <TransactionDropdown onCloseDropdown={() => setOpenDropdown(false)} /> : null}
              </TransactionStyles>
            ) : (
              <TransactionStyles key={i}>
                <div className="container">
                  <div className="container__profile">
                    <Image
                      className="profile__img"
                      src={transactionData.image}
                      alt="User's profile image"
                    />
                    <p>Skylar Dias</p>
                  </div>
                  <div className="container__transaction">
                    <div className="">{transactionData.date}</div>
                    <div className="">-&#8358;{transactionData.amount}</div>
                  </div>
                  <div>
                    <button className={transactionData.status === "IN PROGRESS" ? "progress" || transactionsData.status === "COMPLETE" : "complete"}>{transactionData.status}</button>
                  </div>
                </div>
              </TransactionStyles>
            )}
          </>
        ))}
      </div>
    </TransactionHistoryStyles>
  );
};

export default TransactionHistory;
