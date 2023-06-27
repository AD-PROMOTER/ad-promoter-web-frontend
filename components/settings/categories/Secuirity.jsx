import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, StyledSecuirity } from '../settings.style';
import { useToast } from '@chakra-ui/react';

const Secuirity = () => {
  const [value, setValue] = useState('alanByte003');
  const [newValue, setNewValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');
  const [isChangesMade, setIsChangesMade] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [userToken, setUserToken] = useState();
  const toast = useToast();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user-token'));
    setUserToken(token);
  }, [])

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (confirmValue !== newValue) {
      setIsChangesMade(true);
      setInputError(true);
    } else {
      setIsChangesMade(false);
      setInputError(false);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    const passwordDetails = {
      previousPasssword: value,
      newPassword: newValue,
      confirmNewPassword: confirmValue,
    };

    console.log(passwordDetails);

    const response = fetch(
      'https://api.ad-promoter.com/api/v1/user/change-password',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userToken}` },
        body: JSON.stringify(passwordDetails),
      }
    );

    try {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }

      if (response.status === 500) {
        throw new Error('Could not update password please try again');
      }

      if (response.status === 201) {
        const data = await response.json();
        console.log(data);
        toast({
          title: 'Password Updated',
          status: 'sucess',
          duration: '5000',
          isClosable: true,
          position: 'bottom-left',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: `${error.message}`,
        status: 'warning',
        duration: '5000',
        isClosable: true,
        position: 'top-left',
      });
    }
  };

  return (
    <StyledSecuirity>
      <div className="info">
        <p> Password </p>
        <span>
          {' '}
          In order to better protect your account, make sure you set up a strong
          and secure password.{' '}
        </span>
      </div>

      <form onSubmit={updatePassword}>
        <div className="pwd current-pwd">
          <label htmlFor="current-pwd"> Current Password </label>
          <input
            type="password"
            name="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value), setIsChangesMade(true);
            }}
            required
          />
        </div>
        <div className="pwd new-pwd">
          <label htmlFor="current-pwd"> New Password </label>
          <input
            type="password"
            name="password"
            value={newValue}
            onChange={(e) => {
              setNewValue(e.target.value), setIsChangesMade(true);
            }}
            required
          />
        </div>
        <div className="pwd confirm-pwd">
          <label htmlFor="current-pwd"> Confirm Password </label>
          <input
            className={inputError ? 'input-error' : ''}
            type="password"
            name="password"
            value={confirmValue}
            onChange={(e) => {
              setConfirmValue(e.target.value), setIsChangesMade(true);
            }}
            required
          />
        </div>

        <div className="controls">
          <Button
            className={isChangesMade ? '' : 'inactive'}
          >
            {' '}
            Save changes{' '}
          </Button>
        </div>
      </form>

      {/* <div className="controls">
        <Button
          onClick={handleSaveChanges}
          className={isChangesMade ? '' : 'inactive'}
        >
          {' '}
          Save changes{' '}
        </Button>
      </div> */}
    </StyledSecuirity>
  );
};

export default Secuirity;
