import { useState } from 'react';

import WalletSummary from '@/components/promoterWallet/summary/walletSummary';
import TransactionHistory from '@/components/promoterWallet/transaction/transactionHistory';
import Wallet from '@/components/promoterWallet/wallet/wallet';
import PromoterWalletStyles from '@/styles/promoterWallet';
import ProcessWithdrawModal from '@/components/promoterModal/walletModals/WithdrawProcess';
import WithdrawDetailsModal from '@/components/promoterModal/walletModals/WithdrawDetails';
import WithdrawFundsModal from '@/components/promoterModal/walletModals/WithdrawFundsModal';
import PaymentDetailsModal from '@/components/promoterModal/walletModals/PaymentDetailsModal';
import VerificationModal from '@/components/promoterModal/walletModals/VerificationModal';
import SuccessModal from '@/components/promoterModal/walletModals/SuccessModal';

const PromoterWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWithdrawProcessModal, setShowWithdrawProcessModal] =
    useState(false);
  const [showWithdrawDetailsModal, setShowWithdrawDetailsModal] =
    useState(false);
  const [showWithdrawFundsModal, setShowWithdrawFundsModal] = useState(false);
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div>
      <PromoterWalletStyles>
        <WalletSummary />
        <Wallet
          onOpenWithdrawProcess={() => setShowWithdrawProcessModal(true)}
          show={showModal}
          onOpenPaymentDetailsModal={() => setShowPaymentDetailsModal(true)}
        />
        <TransactionHistory />
      </PromoterWalletStyles>
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
    </div>
  );
};

export default PromoterWallet;
