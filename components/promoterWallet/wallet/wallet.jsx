import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import plus from '@/public/assets/plus.svg';
import gtb from '@/public/assets/gtb.svg';
import fcmb from '@/public/assets/fcmb.svg';
import emptyWallet from '@/public/assets/empty-wallet-add.svg';
import WalletStyles from '../styles/wallet';
import EditWalletDropdown from './Dropdown';
import Card from '../summary/card';
import money from '@/public/assets/money-2.svg';
import AdminWalletStyles from '@/styles/adminWallet';
import axios from 'axios';

const Wallet = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [firstBank, setFirstBank] = useState(false);
  const [secondBank, setSecondBank] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const toggleDropdown = () => {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  const toggleFirstBank = () => {
    if (firstBank) {
      setFirstBank(false);
    }
    return;
  };

  const toggleSecondBank = () => {
    if (secondBank) {
      setSecondBank(false);
    }
    return;
  };

  const selectFirstBank = () => {
    setFirstBank(true);
    toggleSecondBank();
  };

  const selectSecondBank = () => {
    setSecondBank(true);
    toggleFirstBank();
  };

  return (
    <WalletStyles>
      <div className="intro">
        <h1>Wallet</h1>
        <button
          className="intro__add"
          onClick={props.onOpenPaymentDetailsModal}
        >
          <Image src={plus} alt="Add bank account icon" />
        </button>
      </div>

      {props.admin ? (
        <AdminWalletStyles>
          <Card
            img={money}
            text="Total Amount Made (20%)"
            amount="15,000.35"
            bg="--unknown-2"
            shadow="--shadow-3"
          />
        </AdminWalletStyles>
      ) : null}

      <>     
        {!props.accountData || props.isLoading ? (
          <p>Loading</p>
        ):(
          <>      
            {props.accountData.length === 0 ?(
              <p>Add an account</p>
            ):(
              <div>
                {[...props.accountData].reverse().slice(0,2).map((index)=>(
                  <div
                  key={index.id}
                    className={selectedBank === index.id ? 'container bank1 clicked': 'container bank1'}
                    onClick={()=>setSelectedBank(index.id)}
                  >
                    <div className="container__acctdetails">
                      <Image src={gtb}  alt="Guarantee trust bank logo" />
                      <div>
                        <p className="acctNum">{index.details.account_number}</p>
                        <p className="acctName">{index.details.account_name}</p>
                      </div>
                    </div>
                    <div className="container__select">
                      <input type="radio" name="banks" value={index.id} checked={selectedBank === index.id} onChange={() => setSelectedBank(index.id)}/> 
                      <span className="checkmark"></span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </>

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
