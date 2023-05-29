import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalContainer from '../ModalContainer';
import Button from '@/components/promoterButton/Button';
import { WithdrawalFundsStyles } from './styles';
import close from '@/public/assets/close-circle.svg';
import SuccessMark from '@/public/assets/success-mark.gif'
import { formatCurrency } from '@/utils/formatCurrency';
const WithdrawFundsModal = (props) => {
  
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
      {props.withdrawConfirmed ? (
        <WithdrawalFundsStyles>
          <div className="close">
            <button onClick={props.onClose}>
              <Image src={close} alt="Exit icon" />
            </button>
          </div>
          {/* <div className="loading">Loading...</div> */}
          <div className="funds">
            <div className="funds__header">
              <h2>Withdraw Funds</h2>
              <p>Please review your withdrawal details</p>
            </div>
            <p className="funds__message">
              Withdrawal was Sucessful. Check your mail for transaction
              verification.
            </p>
            <div className="funds__withdrawal">
              <hr />
              <div className="summary">
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
                    <div className="bold">{props.selectedBankName}</div>
                  </li>
                  <li className="bold">{formatCurrency(props.amount)}</li>
                  <li className="bold">AD-Promoter</li>
                </ul>
              </div>
              <hr />
              <div className="funds__amount">
                <ul>
                  <li>Fee</li>
                  <li>Total Amount</li>
                </ul>
                <ul>
                  <li className="bold">{formatCurrency(100)}</li>
                  <li className="bold">{formatCurrency(props.amount - 100)}</li>
                </ul>
              </div>
            </div>
            <div className="funds__home">
              <Link href="/promoters">
                <a>Home</a>
              </Link>
            </div>
          </div>
        </WithdrawalFundsStyles>
      ) : (
        <WithdrawalFundsStyles>
          <div className="close">
            <button onClick={props.onClose}>
              <Image src={close} alt="Exit icon" />
            </button>
          </div>
          <div className="loading">
            <Image src={SuccessMark} alt='success'/>
          </div>
          <div className="funds">
            <div className="funds__header">
              <h2>Withdraw Funds</h2>
              <p>Please review your withdrawal details</p>
            </div>
            <p className="funds__message">
            Withdrawal was not completed. Please try again or contact <span style={{color: "#7194ff"}}>Customer Support</span> for more details.
            </p>
            <div className="funds__withdrawal">
              <hr />
              <div className="summary">
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
                    <div className="bold">{props.selectedBankName}</div>
                  </li>
                  <li className="bold">{formatCurrency(props.amount)}</li>
                  <li className="bold">AD-Promoter</li>
                </ul>
              </div>
              <hr />
              <div className="funds__amount">
                <ul>
                  <li>Fee</li>
                  <li>Total Amount</li>
                </ul>
                <ul>
                  <li className="bold">{formatCurrency(100)}</li>
                  <li className="bold">{formatCurrency(props.amount - 100)}</li>
                </ul>
              </div>
            </div>
            <div className="funds__home">
              <button className="cancel" onClick={props.onClose}>
                Cancel
              </button>
              <button className="confirm" onClick={handleClick}>Confirm and Withdraw</button>
            </div>
          </div>
          <hr />
          <div className="funds__notice">
            Your bank or payment processor may apply extra fees.
          </div>
        </WithdrawalFundsStyles>
      )}
    </ModalContainer>
  );
};

export default WithdrawFundsModal;
