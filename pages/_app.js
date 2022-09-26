import PromoterLayout from '@/components/PromoterLayout';
import AppContext from '@/context/context';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
import { useState } from 'react';
function MyApp({ Component, pageProps, router }) {
  const [userRole, setUserRole] = useState('place');
  if (router.pathname.startsWith('/promoters')) {
    return (
      <PromoterLayout>
        <VariableStyle />
        <GlobalStyle />
        <SanitizeStyle />
        <Component {...pageProps} />
      </PromoterLayout>
    );
  }
  return (
    <AppContext.Provider
      value={{ userRole: userRole, setUserRole: setUserRole }}
    >
      <VariableStyle />
      <GlobalStyle />
      <SanitizeStyle />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
