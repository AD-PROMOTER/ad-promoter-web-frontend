import { createContext, useState } from 'react';

const PreferenceContext = createContext();

export function PreferenceProvider({ children }) {
  const [userPref, setUserPref] = useState('place');

  return (
    <PreferenceContext.Provider value={{ userPref, setUserPref }}>
      {children}
    </PreferenceContext.Provider>
  );
}
export default PreferenceContext;
