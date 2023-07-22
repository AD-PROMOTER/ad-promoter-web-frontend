import React from 'react'
import { DetailsContainer } from './mobileWallet.style'
import gtb from '@/public/assets/gtb.svg';
import Image from 'next/image';
import emptyWallet from '@/public/assets/empty-wallet-add.svg';
import { formatCurrency } from '@/utils/formatCurrency';
import { useState } from 'react';
import { useEffect } from 'react';

const WithdrawDetails = (props) => {
  const {onOpenWithdrawProcess, onCloseWithdrawDetails} = props;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading,setIsLoading] = useState(null)
  const [token,setToken] = useState('')
  const [userId,setUserId] = useState('')

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    const userId = JSON.parse(localStorage.getItem('user-detail'))
    if (userToken) {
      setToken(userToken);
      setUserId(userId._id)
    }
  },[]);

  const toggleModals = () => {
    props.onCloseModal();
    props.onOpenWithdrawProcess();
  }

  const handleChange = event => {
    if (event.target.checked) {
      setIsConfirmed(true)
    } else {
      setIsConfirmed(false)
    }
  };

  const withdraw = async(amount,userId) =>{
      setIsLoading(true)
      const response = await fetch('https://api.ad-promoter.com/api/v1/payouts/create', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          "amount": amount,
          "recipient": userId
        }),
      });
      const json = await response.json();
  
      if (!response.ok) {
        success.current = false
        setIsLoading(false)
        props.setWithdrawConfirmed(false)
        props.onOpenWithdrawModal()
        props.onCloseModal()
      }
      if (response.ok) {
        setIsLoading(false)
        if(json.success){
         props.setWithdrawConfirmed(true)
         if(props.withdrawConfirmed){
            props.onOpenWithdrawModal()
            props.onCloseModal()
          }
        }
      }

  }

  const handleClick = () =>{
   withdraw(props.amount,userId)
  }
  return (
    <DetailsContainer>
      <div className='details'>
        <p>Withdrawal Details</p>
        <span onClick={toggleModals}>Edit</span>
      </div>
      <div className='to'>
        <div className='destination'>
            <p className='with'>Withdrawal to</p>
            <div className='gtb'>
              <Image
                src={props.selectedBankImage}
                alt="Bank Logo"
                width="16px"
                height="16px"
              />
              <span>{props.selectedBankName}</span>
            </div>
        </div>
        <div className='price'>
            <p>Amount</p>
            <span>{formatCurrency(props.amount)}</span>
        </div>
        <div className='price'>
            <p>Description</p>
            <span>AD-Promoter</span>
        </div>
      </div>
      <div className='to'>
        <div className='fee'>
            <p>Fee</p>
            <span>{formatCurrency(100)}</span>
        </div>
        <div className='fee'>
            <p>Total amount</p>
            <span>{formatCurrency(props.amount - 100)}</span>
        </div>
      </div>
      <div className='warning'>
        Total amount may be subject to fees charged by banks or third-part providers
      </div>
      <div className='confirm'>
        <input 
          type="checkbox"  
          value={isConfirmed}
          onChange={handleChange}
          id='confirm'
          name='confirm'
        />
        <p>I confirm the withdrawal details above</p>
      </div>
      <div className='withdraw-button' onClick={handleClick}>
        <Image src={emptyWallet} alt='wallet'/>
        <button disabled={!isConfirmed}>{isLoading ? 'Withdrawing':'Withdraw'}</button>
      </div>
    </DetailsContainer>
  )
}

export default WithdrawDetails
