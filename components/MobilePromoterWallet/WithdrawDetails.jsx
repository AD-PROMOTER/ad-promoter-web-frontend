import React from 'react'
import { DetailsContainer } from './mobileWallet.style'
import gtb from '@/public/assets/gtb.svg';
import Image from 'next/image';
import emptyWallet from '@/public/assets/empty-wallet-add.svg';

const WithdrawDetails = ({onOpen, onClose, onOpenModal, onCloseModal}) => {
    const toggleModal = () => {
        onClose();
        onOpen();
    }
    const toggleFundsModal = () => {
        onCloseModal();
        onOpenModal();
    }
  return (
    <DetailsContainer>
      <div className='details'>
        <p>Withdrawal Details</p>
        <span onClick={toggleModal}>Edit</span>
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
      <div className='warning'>
        Total amount may be subject to fees charged by banks or third-part providers
      </div>
      <div className='confirm'>
        <input type="checkbox"/>
        <p>I confirm the withdrawal details above</p>
      </div>
      <div className='withdraw-button' onClick={toggleFundsModal}>
        <Image src={emptyWallet} alt='wallet'/>
        <p>Process Withdrawal</p>
      </div>
    </DetailsContainer>
  )
}

export default WithdrawDetails
