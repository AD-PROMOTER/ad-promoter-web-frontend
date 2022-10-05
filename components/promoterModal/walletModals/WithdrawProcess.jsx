import { useState, useRef } from 'react';

import ModalContainer from '../ModalContainer';
import close from '@/public/assets/close-circle.svg';
import Image from 'next/image';
import gtb from '@/public/assets/gtb.svg';
import fcmb from '@/public/assets/fcmb.svg';
import Button from '@/components/promoterButton/Button';
import { WithdrawProcessStyles } from './styles';

const ProcessWithdrawModal = (props) => {
  const [amount, setAmount] = useState('');
  const inputRef = useRef();

  const {onOpenWithdrawDetails, onCloseWithdrawProcess} = props;
  const {showWithdrawDetailsModal} = props.show;

  console.log(showWithdrawDetailsModal);

  const handleChange = (props) => {
    setAmount(inputRef.current.value);
  };

  return (
    <ModalContainer>
      <WithdrawProcessStyles>
        <div className="close">
          <button onClick={onCloseWithdrawProcess}>
            <Image src={close} alt="Exit icon" />
          </button>
        </div>
        <form>
          <h2>Withdraw Process</h2>
          <div className="acct">
            <div className="acct__container acct__bank1">
              <div className="acctDetails">
                <Image src={gtb} alt="Guarantee trust bank logo" />
                <div>
                  <p className="acctNum">02347685075</p>
                  <p className="acctName">Skylar Diaz</p>
                </div>
              </div>
              <div>
                <input type="checkbox" id="bank-1" />
                <label htmlFor="bank-1"></label>
              </div>
            </div>

            <div className="acct__container">
              <div className="acctDetails">
                <Image src={fcmb} alt="FCMB logo" />
                <div>
                  <p className="acctNum">42456530765</p>
                  <p className="acctName">Mitchelle Diaz</p>
                </div>
              </div>
              <div className="container__select">
                <span className="checkmark"></span>
                <input type="checkbox" id="bank-2" name="" />
                <label htmlFor="bank-2"></label>
              </div>
            </div>
          </div>
          <div className="amountInput">
            <label htmlFor="amount">Amount</label>
            <div>
              <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
            <p className='balance'><span style={{color: "#9e9e9e"}}>BALANCE:</span> &#8358;200,000.35</p>
          </div>
          {/* <Button text="Withdraw" onOpen={onOpenWithdrawDetails} onClose={onCloseWithdrawProcess}/> */}
        </form>
        <Button text="Withdraw" onOpen={onOpenWithdrawDetails} onClose={onCloseWithdrawProcess}/>
      </WithdrawProcessStyles>
    </ModalContainer>
  );
};

export default ProcessWithdrawModal;
