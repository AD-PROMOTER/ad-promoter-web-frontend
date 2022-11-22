import { useState } from 'react';

import Image from 'next/image';
import money from '@/public/assets/money-2.svg';
import emptyWallet from '@/public/assets/empty-wallet-change.svg';
import chevronDown from "@/public/assets/chevron-down.svg";
import { WalletSummaryStyles } from '../styles/summary';
import Card from './card';
import FilterDropdown from './filterDropdown';

const WalletSummary = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const toggleDropdown = () => {
    if(openFilter) {
      setOpenFilter(false);
    } else {
      setOpenFilter(true);
    }
  }

  return (
    <WalletSummaryStyles>
      <div className="intro">
        <h1>Wallet Summary</h1>
        <div className='intro__filter'>
          <p>Filter</p>
          <Image src={chevronDown} alt="" className={openFilter ? "arrow rotate" : "arrow"} onClick={toggleDropdown}/>
        </div>
      </div>
      <div className="cardContainer">
        <Card
          img={money}
          text="Total Balance"
          amount="200,000.35"
          bg="--unknown-1"
          shadow="--shadow-2"
        />
        <Card
          img={emptyWallet}
          text="Pending Withdrawal"
          amount="15,000.35"
          bg="--unknown-2"
          shadow="--shadow-3"
        />
        <Card
          img={money}
          text="Amount Paid"
          amount="5,000.00"
          bgClass="amount"
          bg="--unknown-3"
          shadow="--shadow-2"
        />
      </div>
      {openFilter ? <FilterDropdown/> : null}
    </WalletSummaryStyles>
  );
};

export default WalletSummary;
