import { useState } from 'react';

import Image from 'next/image';
import money from '@/public/assets/money-2.svg';
import emptyWallet from '@/public/assets/empty-wallet-change.svg';
import chevronDown from '@/public/assets/chevron-down.svg';
import { WalletSummaryStyles } from '../styles/summary';
import Card from './card';
import FilterDropdown from './filterDropdown';
import { formatCurrencyWithoutStyle,formatCurrency } from '@/utils/formatCurrency';
const WalletSummary = (props) => {
  const [openFilter, setOpenFilter] = useState(false);

  const toggleDropdown = () => {
    if (openFilter) {
      setOpenFilter(false);
    } else {
      setOpenFilter(true);
    }
  };

  return (
    <WalletSummaryStyles admin={props.admin}>
      {props.admin ? (
        <div className="intro">
          <h1>Wallet Summary</h1>
        </div>
      ) : (
        <div className="intro">
          <h1>Wallet Summary</h1>
          <div className="intro__filter" onClick={toggleDropdown}>
            <p>Filter</p>
            <Image
              src={chevronDown}
              alt=""
              className={openFilter ? 'arrow rotate' : 'arrow'}
            />
          </div>
        </div>
      )}
      <div className="cardContainer">
        <Card
          img={money}
          text={props.admin ? "Total Amount Received" : "Total Balance"}
          amount={formatCurrency(props.totalBalance)}
          bg="--unknown-1"
          shadow="--shadow-2"
        />
        <Card
          img={emptyWallet}
          text={props.admin ? "Total Amount Paid out" : "Pending Withdrawal"}
          amount={formatCurrency(props.pendingWithdrawals)}
          bg="--unknown-2"
          shadow="--shadow-3"
        />
        <Card
          img={money}
          text={props.admin ? "Total Amount Unpaid" : "Amount Paid"}
          amount={formatCurrency(props.amountPaid)}
          bgClass="amount"
          bg="--unknown-3"
          shadow="--shadow-2"
        />
      </div>
      {openFilter ? <FilterDropdown /> : null}
    </WalletSummaryStyles>
  );
};

export default WalletSummary;
