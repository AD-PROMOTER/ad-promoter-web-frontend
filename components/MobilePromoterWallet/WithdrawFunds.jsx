import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SuccessMark from '@/public/assets/success-mark.gif';
import gtb from '@/public/assets/gtb.svg';
import { FundsContainer, FailedContainer } from './mobileWallet.style';

const WithdrawFunds = ({onClose}) => {
    const [withdrawConfirmed, setWithdrawConfirmed] = useState(false);
  return (
    <FundsContainer>
      {withdrawConfirmed ? (
        <>
            <div className='funds'>
                <div className='sucess-mark'>
                    <Image src={SuccessMark} alt="gif"/>
                </div>
                <p>Withdraw Funds</p>
                <span>Please review your withdrawal details</span>
            </div>
            <div className='check'>
                Withdrawal was successful. Check your mail for transaction verification
            </div>
            <div className='to'>
                <div className='destination'>
                    <p className='with'>Withdrawal to</p>
                    <div className='gtb'>
                        <Image src={gtb} alt='gtb' width={50}/>
                        <span>Guaranty Trust Bank</span>
                    </div>
                </div>
                <div className='price'>
                    <p>Amount</p>
                    <span>&#8358;2,000.35</span>
                </div>
                <div className='price'>
                    <p>Description</p>
                    <span>AD-Promoter</span>
                </div>
            </div>
            <div className='to'>
                <div className='fee'>
                    <p>Fee</p>
                    <span>&#8358;100.00</span>
                </div>
                <div className='fee'>
                    <p>Total amount</p>
                    <span>&#8358;2,100.35</span>
                </div>
            </div>
            <div className='third'>
                Total amount may be subject to feescharged by banks or third-part providers
            </div>
            <Link href="/promoters">
                <a>Home</a>
            </Link>
        </>
      ):(
        <FailedContainer>
          <div className='funds'>Withdraw Funds</div>
          <div className='review'>Please review your withdrawal details</div>
          <div className='complete'>
            Withdrawal was not completed. Please try again or contact <span style={{color: '#5c85ff'}}>Customer Support</span> for more details.
          </div>
          <div className='to'>
                <div className='destination'>
                    <p className='with'>Withdrawal to</p>
                    <div className='gtb'>
                        <Image src={gtb} alt='gtb' width={50}/>
                        <span>Guaranty Trust Bank</span>
                    </div>
                </div>
                <div className='price'>
                    <p>Amount</p>
                    <span>&#8358;2,000.35</span>
                </div>
                <div className='price'>
                    <p>Description</p>
                    <span>AD-Promoter</span>
                </div>
            </div>
            <div className='to'>
                <div className='fee'>
                    <p>Fee</p>
                    <span>&#8358;100.00</span>
                </div>
                <div className='fee'>
                    <p>Total amount</p>
                    <span>&#8358;2,100.35</span>
                </div>
            </div>
            <div className='third'>
                Total amount may be subject to feescharged by banks or third-part providers
            </div>
            <div className='confirm'>
                <input type="checkbox"/>
                <p>I can confirm the withdrawal details above</p>
            </div>
            <div className='cancel-confirm'>
                <div className='cancel-button' onClick={onClose}>Cancel</div>
                <div className='confirm-button' onClick={() => setWithdrawConfirmed(true)}>Confirm</div>
            </div>
            <div className='process'>Your bank or payment processor may apply extra fees.</div>
        </FailedContainer>
      )}
    </FundsContainer>
  )
}

export default WithdrawFunds
