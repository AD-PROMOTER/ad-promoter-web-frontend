import Button from '@/components/promoterButton/Button';
import ModalContainer from '../ModalContainer';
import { WithdrawalDetailsStyles } from './styles';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatCurrency';
import { useState } from 'react';
import ButtonStyles from '@/components/promoterButton/styles';
import { useEffect } from 'react';

const WithdrawDetailsModal = (props) => {
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
    <ModalContainer>
      <WithdrawalDetailsStyles>
        <div className="header">
            <h2>Withdrawal Details</h2>
            <button onClick={toggleModals}>Edit</button>
        </div>
        <div className="withdrawal">
          <hr />
          <div className="withdrawal__details">
            <ul>
              <li>Withdraw to</li>
              <li>Amount</li>
              <li>Description</li>
            </ul>
            <ul>
              <li className="flex">
                <Image
                  src="/assets/gtb.png"
                  alt="Guaranty Trust Bank"
                  width="16px"
                  height="16px"
                />
                <p className='bold'>{props.selectedBankName}</p>
              </li>
              <li className='bold'>{formatCurrency(props.amount)}</li>
              <li className='bold'>AD-Promoter</li>
            </ul>
          </div>
          <div className="withdrawal__total">
            <hr />
            <div className='amount'>
              <ul>
                <li>Fee</li>
                <li>Total Amount</li>
              </ul>
              <ul>
                <li className='bold'>{formatCurrency(100)}</li>
                <li className='bold'>{formatCurrency(props.amount - 100)}</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className='withdrawal__notice'>
            Total amount may be subject to fees charged by banks or third-party
            providers
          </p>
        </div>
        <div className='confirm'>
          <input 
            type="checkbox"  
            value={isConfirmed}
            onChange={handleChange}
            id='confirm'
            name='confirm'/>
          <label>I confirm the withdrawal details above</label>
        </div>
        <ButtonStyles onClick={handleClick}>
          <button disabled={!isConfirmed}>{isLoading ? 'Withdrawing':'Withdraw'}</button>
        </ButtonStyles>
        {/* <Button text="Withdraw" onOpen={props.onOpenWithdrawModal} onClose={props.onCloseModal} /> */}
      </WithdrawalDetailsStyles>
    </ModalContainer>
  );
};

export default WithdrawDetailsModal;
