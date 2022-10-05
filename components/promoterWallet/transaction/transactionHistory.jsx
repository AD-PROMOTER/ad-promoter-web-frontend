import Image from 'next/image';
import trash from '@/public/assets/trash.svg';
import profile from '@/public/assets/Profil.svg';
import { TransactionHistoryStyles } from '../styles/transaction';
import Transaction from './transaction';

const TransactionHistory = () => {
  return (
    <TransactionHistoryStyles>
      <div className="intro">
        <h1>Transaction History</h1>
        <button className="intro__trash">
          <Image src={trash} alt="Trash Icon" />
        </button>
      </div>
      <div className="transactionContainer">
        <Transaction profileImg={profile} date="Today" />
        <Transaction profileImg={profile} date="Yesterday" />
        <Transaction profileImg={profile} date="21, sept, 2019" />
        <Transaction profileImg={profile} date="16, sept, 2019" />
        <Transaction profileImg={profile} date="13, sept, 2019" />
        <Transaction profileImg={profile} date="08, sept, 2019" />
      </div>
    </TransactionHistoryStyles>
  );
};

export default TransactionHistory;
