import Image from 'next/image';
import notifHam from '@/public/assets/notif-ham.svg';
import money from '@/public/assets/money-2.svg';
import emptyWallet from '@/public/assets/empty-wallet-change.svg';
import { WalletSummaryStyles } from '../styles/summary';
import Card from './card';

const WalletSummary = () => {
  return (
    <WalletSummaryStyles>
      <div className="intro">
        <h1>Wallet Summary</h1>
        <button>
          <Image src={notifHam} alt="Notification Icon" />
        </button>
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
    </WalletSummaryStyles>
  );
};

export default WalletSummary;
