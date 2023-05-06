import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export const useAddWallet = () => {
  const [isLoading, setIsLoading] = useState(null);
  const success = useRef();
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user-token'));
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const createBank = async (bankCode, acctName, acctNumber, props) => {
    setIsLoading(true);

    const response = await fetch(
      'http://35.153.52.116/api/v1/wallet/create-recipient',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          type: 'nuban',
          name: acctName,
          account_number: acctNumber,
          bank_code: bankCode,
          amount: 0,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      success.current = false;
      setIsLoading(false);
    }
    if (response.ok) {
      setIsLoading(false);
      if (json.success) {
        props.onClose();
        props.onOpen();
      }
    }
  };
  return { createBank, isLoading, success };
};
