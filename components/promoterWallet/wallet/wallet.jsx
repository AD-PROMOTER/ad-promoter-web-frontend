import { useState } from 'react';

import Image from 'next/image';
import plus from '@/public/assets/plus.svg';
import gtb from '@/public/assets/gtb.svg';
import fcmb from '@/public/assets/fcmb.svg';
import emptyWallet from '@/public/assets/empty-wallet-add.svg';
import WalletStyles from '../styles/wallet';
import EditWalletDropdown from './Dropdown';

const Wallet = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [firstBank, setFirstBank] = useState(false);
  const [secondBank, setSecondBank] = useState(false);

  const toggleDropdown = () => {
    if(showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true)
    }
  }

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
    <WalletStyles>
      <div className="intro">
        <h1>Wallet</h1>
        <button className="intro__add" onClick={props.onOpenPaymentDetailsModal}>
          <Image src={plus} alt="Add banck account icon" />
        </button>
      </div>

      <div>
        <div className={firstBank ? "container bank1 clicked" : "container bank1"} onClick={selectFirstBank}>
          <div className="container__acctdetails">
            <Image src={gtb} alt="Guarantee trust bank logo" />
            <div>
              <p className="acctNum">02347685075</p>
              <p className="acctName">Skylar Diaz</p>
            </div>
          </div>
          <div className="container__select">
          {firstBank ? <input type="checkbox" id="bank-2" name="" checked /> : <input type="checkbox" id="bank-2" name="" />}
            <span className="checkmark"></span>
          </div>
        </div>

        <div className={secondBank ? "container bank1 clicked" : "container bank1"} onClick={selectSecondBank}>
          <div className="container__acctdetails">
            <Image src={fcmb} alt="FCMB logo" />
            <div>
              <p className="acctNum">42456530765</p>
              <p className="acctName">Mitchelle Diaz</p>
            </div>
          </div>
          <div className="container__select">
            {secondBank ? <input type="checkbox" id="bank-2" name="" checked /> : <input type="checkbox" id="bank-2" name="" />}            
            <span className="checkmark"></span>
          </div>
        </div>
      </div>

      <div className="buttonContainer">
        <button onClick={props.onOpenWithdrawProcess}>
          <Image src={emptyWallet} alt="Wallet Icon" className="img" />
          <p>Process Withdrawal </p>
        </button>
      </div>
      {/* {showDropdown ? <EditWalletDropdown onOpen={props.onOpenPaymentDetailsModal} /> : null} */}
    </WalletStyles>
  );
};

export default Wallet;
