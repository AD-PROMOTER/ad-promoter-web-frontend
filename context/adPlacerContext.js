import { createContext, useState } from 'react';

const AdPlacerContext = createContext();

export function AdPlacerProvider({ children }) {
  const [directLinkFormValue, setDirectLinkFormValue] = useState({
    productName: '',
    productDescription: '',
    webAddress: '',
  });
  return (
    <AdPlacerContext.Provider
      value={{
        directLinkFormValue,
        setDirectLinkFormValue,
      }}
    >
      {children}
    </AdPlacerContext.Provider>
  );
}
export default AdPlacerContext;
