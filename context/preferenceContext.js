import { createContext, useState } from 'react';

const PreferenceContext = createContext();

export function PreferenceProvider({ children }) {
  const [userPref, setUserPref] = useState('place');
  const [userFormValue, setUserFormValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userTel, setUserTel] = useState('');
  const [isInputWithValue, setIsInputWithValue] = useState(false);
  const [isPrefWithValue, setIsPrefWithValue] = useState(false);
  const [isVisualVerificationWithValue, setIsVisualVerificationWithValue] =
    useState(false);
  const [isLoginInputWithValue, setIsLoginInputWithValue] = useState(false);
  return (
    <PreferenceContext.Provider
      value={{
        userPref,
        setUserPref,
        userFormValue,
        setUserFormValue,
        isInputWithValue,
        setIsInputWithValue,
        userTel,
        setUserTel,
        isPrefWithValue,
        setIsPrefWithValue,
        isVisualVerificationWithValue,
        setIsVisualVerificationWithValue,
        isLoginInputWithValue,
        setIsLoginInputWithValue,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
}
export default PreferenceContext;
