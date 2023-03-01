import React, {useState, useRef} from 'react'
import { WithdrawContainer } from './mobileWallet.style'
import Image from 'next/image';
import gtb from '@/public/assets/gtb.svg';
import fcmb from '@/public/assets/fcmb.svg';
import emptyWallet from '@/public/assets/empty-wallet-add.svg';
const WithdrawProcess = ({onOpen, onClose}) => {
    const [amount, setAmount] = useState('');
  const [firstBank, setFirstBank] = useState(false);
  const [secondBank, setSecondBank] = useState(false);
  const inputRef = useRef();

  const toggleModal = () => {
    onClose();
    onOpen();
  }

  const handleChange = (props) => {
    setAmount(inputRef.current.value);
  };

  const toggleFirstBank = () => {
    if(firstBank) {
      setFirstBank(false);
    }
    return;
  }

  const toggleSecondBank = () => {
    if(secondBank) {
      setSecondBank(false);
    }
    return;
  }

  const selectFirstBank = () => {
    setFirstBank(true);
    toggleSecondBank();
  }

  const selectSecondBank = () => {
    setSecondBank(true);
    toggleFirstBank();
  }
  return (
    <WithdrawContainer>
        <div className='withdraw'>Process Withdrawal</div>
        <form>
          <div className="acct">
            <div className={firstBank ? "acct__container acct__bank1 acct__clicked" :"acct__container acct__bank1"} onClick={selectFirstBank}>
              <div className="acctDetails">
                <Image src={gtb} alt="Guarantee trust bank logo" />
                <div>
                  <p className="acctNum">02347685075</p>
                  <p className="acctName">Skylar Diaz</p>
                </div>
              </div>
              <div div className="select">
                {firstBank ? <input type="checkbox" id="bank-1" checked /> : <input type="checkbox" id="bank-1" />}
                
                <span className="checkmark"></span>
              </div>
            </div>

            <div className={secondBank ? "acct__container acct__clicked" : "acct__container"} onClick={selectSecondBank}>
              <div className="acctDetails">
                <Image src={fcmb} alt="FCMB logo" />
                <div>
                  <p className="acctNum">42456530765</p>
                  <p className="acctName">Mitchelle Diaz</p>
                </div>
              </div>
              <div className="select">
                {secondBank ? <input type="checkbox" id="bank-2" name="" checked /> : <input type="checkbox" id="bank-2" name="" />}                
                <span className="checkmark"></span>
              </div>
            </div>
          </div>
          <div className="amountInput">
            <div className='input-container'>
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                placeholder='Enter amount'
                name="amount"
                value={amount}
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
            <div className="balance-container">
              <p className='balance'> BALANCE:</p>
              <p className='balance-amount'>₦200,000.35</p>
            </div>
          </div>
          {/* <Button text="Withdraw" onOpen={onOpenWithdrawDetails} onClose={onCloseWithdrawProcess}/> */}
        </form>
        <div className='withdraw-button' onClick={toggleModal}>
            <Image src={emptyWallet} alt='wallet'/>
            <p>Process Withdrawal</p>
        </div>
    </WithdrawContainer>
  )
}

export default WithdrawProcess
