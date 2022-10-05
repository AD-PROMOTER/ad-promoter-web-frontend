import Image from 'next/image';
import { TransactionStyles } from '../styles/transaction';

const Transaction = (props) => {
  return (
    <TransactionStyles>
      <div className="profile">
        <Image
          className="profile__img"
          src={props.profileImg}
          alt="User's profile image"
        />
        <p>Skylar Dias</p>
      </div>
      <div className='transaction'>{props.date}</div>
      <div className='transaction'>-&#8358;21,000.98</div>
    </TransactionStyles>
  );
};

export default Transaction;
