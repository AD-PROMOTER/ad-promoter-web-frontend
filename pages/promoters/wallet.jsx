import { useState,useEffect,useRef } from 'react';
import WalletSummary from '@/components/promoterWallet/summary/walletSummary';
import TransactionHistory from '@/components/promoterWallet/transaction/transactionHistory';
import Wallet from '@/components/promoterWallet/wallet/wallet';
import PromoterWalletStyles, { MobileWallet, PromoterWalletContainer, TabWallet } from '@/styles/promoterWallet';
import ProcessWithdrawModal from '@/components/promoterModal/walletModals/WithdrawProcess';
import WithdrawDetailsModal from '@/components/promoterModal/walletModals/WithdrawDetails';
import WithdrawFundsModal from '@/components/promoterModal/walletModals/WithdrawFundsModal';
import PaymentDetailsModal from '@/components/promoterModal/walletModals/PaymentDetailsModal';
import VerificationModal from '@/components/promoterModal/walletModals/VerificationModal';
import SuccessModal from '@/components/promoterModal/walletModals/SuccessModal';
import Image from 'next/image';
import money from '@/public/assets/money.svg';
import wallet from '@/public/assets/empty-wallet-change.svg';
import plus from '@/public/assets/plus.svg';
import gtb from '@/public/assets/gtb.svg';
import fcmb from '@/public/assets/fcmb.svg';
import emptyWallet from '@/public/assets/empty-wallet-add.svg';
import documentDownload from '@/public/assets/document-download.svg';
import Transaction from '@/components/MobilePromoterWallet/Transaction';
import Recent from '@/components/MobilePromoterHome/Recent';
import { BackdropContainer } from '@/components/MobilePromoterHome/style';
import PaymentDetails from '@/components/MobilePromoterWallet/PaymentDetails';
import Verification from '@/components/MobilePromoterWallet/Verification';
import Success from '@/components/MobilePromoterWallet/Success';
import WithdrawProcess from '@/components/MobilePromoterWallet/WithdrawProcess';
import WithdrawDetails from '@/components/MobilePromoterWallet/WithdrawDetails';
import WithdrawFunds from '@/components/MobilePromoterWallet/WithdrawFunds';
import arrowUp from '@/public/assets/arrow-up.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import axios from 'axios';

const PromoterWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWithdrawProcessModal, setShowWithdrawProcessModal] = useState(false);
  const [showWithdrawDetailsModal, setShowWithdrawDetailsModal] = useState(false);
  const [showWithdrawFundsModal, setShowWithdrawFundsModal] = useState(false);
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [firstBank, setFirstBank] = useState(false);
  const [secondBank, setSecondBank] = useState(false);
  const [showSummary, setShowSummary] = useState(true)
  const token = useRef('')
  const [isLoading,setIsLoading] = useState(false)
  const [totalBalance,setTotalBalance] = useState('')
  const [pendingWithdrawals,setPendingWithdrawals] = useState('')
  const [amountPaid,setAmountPaid] = useState('')
  const [transactionHistory,setTransactionHistory] = useState()
  const [banks,setBanks] = useState([])
  const [accountData,setAccountData] = useState()
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState(null);
  const [withdrawConfirmed, setWithdrawConfirmed] = useState(true);

  const [mappedBanks,setMappedBanks] = useState()
  useEffect(() => {
    async function fetchBanks() {
      const response = await fetch('https://nigerianbanks.xyz/');
      const data = await response.json();
      setBanks(data);
    }
    fetchBanks();
  }, []);
 

  useEffect(()=>{
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if (userToken) {
      token.current = userToken
    }
    const fetchWalletSummary = async() =>{
      setIsLoading(true)
      const result = await axios(`https://api.ad-promoter.com/api/v1/wallet/wallet-summary`,{
        headers:{
          Authorization: `Bearer ${token.current}`
        }
      })
      setTotalBalance(result.data.data.amountPaidIn)
      setPendingWithdrawals(result.data.data.amountPaidOut)
      setAmountPaid(result.data.data.amountUnpaid)

    }

    const fetchTransactionHistory = async() =>{
      setIsLoading(true)
      const result = await axios(`https://api.ad-promoter.com/api/v1/payouts/history?page=1&pageSize=10`,{
        headers:{
          Authorization: `Bearer ${token.current}`
        }
      })
      setTransactionHistory(result.data.data.data)
      console.log(result.data.data.data);
    }

    const fetchAccountData = async() =>{
      setIsLoading(true)

      const result = await axios(`https://api.ad-promoter.com/api/v1/wallet/fetch-recipient`,{
        headers:{
          Authorization: `Bearer ${token.current}`
        }
      })
      setAccountData(result.data.data)
      setIsLoading(false)
    }
    

    fetchAccountData()
    fetchWalletSummary()
    fetchTransactionHistory()
  },[])

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

  const walletData = [
    {
      icon: money,
      name: 'Total Balance',
      price: `${totalBalance}`,
      bg: '#D2EFFF',
      nameClass: 'balance'
    },
    {
      icon: wallet,
      name: 'Pending Withdrawal',
      price: `${pendingWithdrawals}`,
      bg: '#FFE2C7',
    },
    {
      icon: money,
      name: 'Amount Paid',
      price: `${amountPaid}`,
      bg: '#f1e8fe'
    },
  ]

  return (
    <>
    <PromoterWalletContainer>
      <PromoterWalletStyles>
        <div className='container'>
          <WalletSummary totalBalance={totalBalance} pendingWithdrawals={pendingWithdrawals} amountPaid={amountPaid} admin={false} />
          <TransactionHistory transactionHistory={transactionHistory} />
        </div>
        <Wallet
          onOpenWithdrawProcess={() => setShowWithdrawProcessModal(true)}
          show={showModal}
          banks={banks}
          accountData={accountData}
          isLoading={isLoading}
          onOpenPaymentDetailsModal={() => setShowPaymentDetailsModal(true)}
        />
      </PromoterWalletStyles>
      {showWithdrawProcessModal ? (
        <ProcessWithdrawModal
          onCloseWithdrawProcess={() => setShowWithdrawProcessModal(false)}
          onOpenWithdrawDetails={() => setShowWithdrawDetailsModal(true)}
          accountData={accountData}
          totalBalance={totalBalance}
          amount={amount}
          setAmount={setAmount}
          selectedBank={setSelectedBank}
          setSelectedBank={setSelectedBank}
          show={{ showWithdrawProcessModal, showWithdrawDetailsModal }}
        />
      ) : null}
      {showWithdrawDetailsModal ? (
        <WithdrawDetailsModal
          onCloseModal={() => setShowWithdrawDetailsModal(false)}
          onOpenModal={() => setShowVerificationModal(true)}
          onOpenWithdrawModal={() => setShowWithdrawFundsModal(true)}
          amount={amount}
          withdrawConfirmed={withdrawConfirmed}
          setWithdrawConfirmed={setWithdrawConfirmed}
        />
      ) : null}
      {showWithdrawFundsModal ? (
        <WithdrawFundsModal withdrawConfirmed={withdrawConfirmed} setWithdrawConfirmed={setWithdrawConfirmed} onClose={() => setShowWithdrawFundsModal(false)} />
      ) : null}
      {showPaymentDetailsModal ? (
        <PaymentDetailsModal
          onOpen={() => setShowSuccessModal(true)}
          onClose={() => setShowPaymentDetailsModal(false)}
          banks={banks}
        />
      ) : null}
      {showVerificationModal ? (
        <VerificationModal onOpen={() => setShowSuccessModal(true)} onClose={() => setShowVerificationModal(false)} />
      ) : null}
      {showSuccessModal ? (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      ) : null}
    </PromoterWalletContainer>
    <MobileWallet>
      <h2>Wallet Summary</h2>
      <div className='summary'>
        {walletData.map((item, index) => (
          <div key={index} className={item.nameClass ? 'balance' : 'card'} style={{backgroundColor: item.bg}}>
            <div className='amount'>
              <div className='icon'>
                <Image src={item.icon} alt='icon'/>
                <p>{item.name}</p>
              </div>
              <h3>{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className='add-wallet'>
        <div className='add'>
          <p>Wallet</p>
          <Image src={plus} alt='plus' onClick={() => setShowPaymentDetailsModal(true)}/>
        </div>
        <div className="bank" onClick={selectFirstBank} style={{ backgroundColor: firstBank && '#DCE4FF', border: firstBank ? '0.2rem solid var(--light-blue)' : '0.145rem solid #DCE4FF' }}>
            <div className="holder">
                <div className="image-wrapper">
                  <Image src={gtb} alt="GTB logo" />
                </div>
                        
                <div className="info">
                    <span style={{ color: firstBank && 'var(--primary)' }}> 235462524 </span>
                    <span style={{ color: firstBank && 'var(--primary)' }} className="name">Skylar Diaz</span>
                </div>
            </div>   

                    {/* <input type='checkbox' checked /> */}
            <span style={{ height: '20px', width: '20px', borderRadius: '50%', border: firstBank ? '6px solid var(--light-blue)' : '5.5px solid #E1E1E1' }}></span>            
        </div>
        <div className="bank" onClick={selectSecondBank} style={{ backgroundColor: secondBank && '#DCE4FF', border: secondBank ? '0.2rem solid var(--light-blue)' : '0.145rem solid #DCE4FF' }}>
            <div className="holder">
                <div className="image-wrapper">
                    <Image src={fcmb} alt='FCMB logo'/>
                </div>
                        
                <div className="info">
                    <span style={{ color: secondBank && 'var(--primary)' }}>47463873522</span>
                    <span style={{ color: secondBank && 'var(--primary)' }} className="name">Michelle Diaz</span>
                </div>
            </div>   

                    {/* <input type='checkbox' checked /> */}
            <span style={{ height: '20px', width: '20px', borderRadius: '50%', border: secondBank ? '6px solid var(--light-blue)' : '5.5px solid #E1E1E1' }}></span>            
        </div>
        <div className='withdrawal' onClick={() => setShowWithdrawProcessModal(true)}>
          <Image src={emptyWallet} alt='button'/>
          <p>Process Withdrawal</p>
        </div>
      </div>
      <div className='transaction'>
        <p>Transaction History</p>
        <Image src={documentDownload} alt='transaction'/>
      </div>
      <Transaction />
      {showPaymentDetailsModal && <BackdropContainer onClick={() => setShowPaymentDetailsModal(false)}></BackdropContainer>}
      {showPaymentDetailsModal && <PaymentDetails onOpen={() => setShowVerificationModal(true)} onClose={() => setShowPaymentDetailsModal(false)}/>}
      {showVerificationModal && <BackdropContainer onClick={() => setShowVerificationModal(false)}></BackdropContainer>}
      {showVerificationModal && <Verification onOpen={() => setShowSuccessModal(true)} onClose={() => setShowVerificationModal(false)}/>}
      {showSuccessModal && <BackdropContainer onClick={() => setShowSuccessModal(false)}></BackdropContainer>}
      {showSuccessModal && <Success />}
      {showWithdrawProcessModal && <BackdropContainer onClick={() => setShowWithdrawProcessModal(false)}></BackdropContainer>}
      {showWithdrawProcessModal && <WithdrawProcess onClose={() => setShowWithdrawProcessModal(false)} onOpen={() => setShowWithdrawDetailsModal(true)}/>}
      {showWithdrawDetailsModal && <BackdropContainer></BackdropContainer>}
      {showWithdrawDetailsModal && <WithdrawDetails onClose={() => setShowWithdrawDetailsModal(false)} onOpen={() => setShowWithdrawProcessModal(true)} onCloseModal={() => setShowWithdrawDetailsModal(false)} onOpenModal={() => setShowWithdrawFundsModal(true)}/>}
      {showWithdrawFundsModal && <BackdropContainer></BackdropContainer>}
      {showWithdrawFundsModal && <WithdrawFunds onClose={() => setShowWithdrawFundsModal(false)}/>}
    </MobileWallet>
    <TabWallet>
      <div className='filter'>
        <div className='choose'>
          <div className={showSummary ? 'active' : 'non-active'} onClick={()=> setShowSummary(true)}>
            Wallet Summary
          </div>
          <div className={showSummary != true ? 'active' : 'non-active'} onClick={()=> setShowSummary(!showSummary)}>
            Wallet
          </div>
        </div>
        <div className='select' onClick={() => setShowDropdown(!showDropdown)}>
          <p>Filter</p>
          {showDropdown ? <Image src={arrowDown} alt=""/> : <Image src={arrowUp} alt=""/>}
          {showDropdown && (
            <ul>
              <li>Recent</li>
              <li>A week ago</li>
              <li>Less than 2 weeks</li>
              <li>Last 30 days</li>
            </ul>
          )}
        </div>
      </div>
      {showSummary ? (
        <>
          <div className='summary'>
            <h3>Wallet Summary</h3>
            <div className='cards'>
              {walletData.map((item, index) => (
                <div className='each' key={index} style={{background: item.bg}}>
                  <div className='icon'>
                    <Image src={item.icon} alt="icon"/>
                    <p>{item.name}</p>
                  </div>
                  <h2>{item.price}</h2>
                </div>
              ))}
            </div>
          </div>
          <TransactionHistory />
        </>
      ): (
      <>
        <div className='summary'>
          <div className='cards'>
            {walletData.map((item, index) => (
              <div className='each' key={index} style={{background: item.bg}}>
                <div className='icon'>
                  <Image src={item.icon} alt="icon"/>
                  <p>{item.name}</p>
                </div>
                <h2>{item.price}</h2>
              </div>
            ))}
          </div>
        </div>
        <Wallet
          onOpenWithdrawProcess={() => setShowWithdrawProcessModal(true)}
          show={showModal}
          onOpenPaymentDetailsModal={() => setShowPaymentDetailsModal(true)}
        />
        {showWithdrawProcessModal ? (
          <ProcessWithdrawModal
            onCloseWithdrawProcess={() => setShowWithdrawProcessModal(false)}
            onOpenWithdrawDetails={() => setShowWithdrawDetailsModal(true)}
            show={{ showWithdrawProcessModal, showWithdrawDetailsModal }}
          />
        ) : null}
        {showWithdrawDetailsModal ? (
          <WithdrawDetailsModal
            onCloseModal={() => setShowWithdrawDetailsModal(false)}
            onOpenModal={() => setShowWithdrawProcessModal(true)}
            onOpenWithdrawModal={() => setShowWithdrawFundsModal(true)}
          />
        ) : null}
        {showWithdrawFundsModal ? (
          <WithdrawFundsModal onClose={() => setShowWithdrawFundsModal(false)} />
        ) : null}
        {showPaymentDetailsModal ? (
          <PaymentDetailsModal
            onOpen={() => setShowVerificationModal(true)}
            onClose={() => setShowPaymentDetailsModal(false)}
          />
        ) : null}
        {showVerificationModal ? (
          <VerificationModal onOpen={() => setShowSuccessModal(true)} onClose={() => setShowVerificationModal(false)} />
        ) : null}
        {showSuccessModal ? (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        ) : null}
      </>)}
    </TabWallet>
    </>
  );
};

export default PromoterWallet;
