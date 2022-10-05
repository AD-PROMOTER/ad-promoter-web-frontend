import ModalContainer from '../ModalContainer';
import Image from 'next/image';
import close from '@/public/assets/close-circle.svg';
import { VerificationStyles } from './styles';

const VerificationModal = (props) => {
  const toggleModal = () => {
    props.onClose();
    props.onOpen();
  };

  return (
    <ModalContainer>
      <VerificationStyles>
        <div className="close">
          <button onClick={props.onClose}>
            <Image src={close} alt="Exit icon" />
          </button>
        </div>
        <div className="container">
          <h2>Phone Verification Required</h2>
          <p className="container__info">
            You are trying to add a withdrawal method to this account. Please
            enter the verification code.
          </p>
          <div className="container__number">
            <p>A verification code was sent to</p>
            <p className="hashed">+234 *** *** **350</p>
          </div>
          <div className="container__code">
            <p>Enter Verification Code</p>
            <div className="codebox">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div className="container__submit">
            <button onClick={toggleModal}>Submit Code</button>
            <p>
              If you did not recieve, Please click{' '}
              <span style={{ color: '#7194ff' }}>Verify By Sms</span> and try
              again
            </p>
          </div>
        </div>
      </VerificationStyles>
    </ModalContainer>
  );
};

export default VerificationModal;
