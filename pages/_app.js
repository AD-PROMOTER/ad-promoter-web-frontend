import PromoterLayout from '@/components/PromoterLayout';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
import { AdPlacerProvider } from '@/context/adPlacerContext';
import { SignupProvider } from '@/context/signupContext';
import { NotificationProvider } from '@/context/notificationContext';
import { DiscoveryGlobalStyle } from '@/styles/discoveryGlobal';
import AdminLayout from '@/components/AdminLayout';
import { AuthContextProvider } from '@/context/authContext';
import PlacersLayout from '@/components/PlacersLayout';
import { TokenContextProvider } from '@/context/tokenContext';
import { UserProvider } from '../context/userContext';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/admin')) {
    return (
      <AuthContextProvider>
        <NotificationProvider>
          <AdminLayout>
            <VariableStyle />
            <GlobalStyle />
            <SanitizeStyle />
            <Component {...pageProps} />
          </AdminLayout>
        </NotificationProvider>
      </AuthContextProvider>
    );
  }

  if (router.pathname.startsWith('/placers')) {
    return (
      <AuthContextProvider>
        <TokenContextProvider>
          <AdPlacerProvider>
            <NotificationProvider>
              <PlacersLayout>
                <UserProvider>
                  <VariableStyle />
                  <GlobalStyle />
                  <SanitizeStyle />
                  <ChakraProvider>
                    <Component {...pageProps} />
                  </ChakraProvider>
                </UserProvider>
              </PlacersLayout>
            </NotificationProvider>
          </AdPlacerProvider>
        </TokenContextProvider>
      </AuthContextProvider>
    );
  }

  // if (
  //   router.pathname.startsWith('/promoters/discovery')
  // ) {
  //   return (
  //     <AuthContextProvider>
  //       <NotificationProvider>
  //         <PromoterLayout>
  //           <VariableStyle />
  //           <DiscoveryGlobalStyle />
  //           <SanitizeStyle />
  //           <Component {...pageProps} />
  //         </PromoterLayout>
  //       </NotificationProvider>
  //     </AuthContextProvider>
  //   );
  // }

  if (router.pathname.startsWith('/promoters')) {
    return (
      <AuthContextProvider>
        <TokenContextProvider>
          <NotificationProvider>
            <PromoterLayout>
              <UserProvider>
                <VariableStyle />
                <GlobalStyle />
                <SanitizeStyle />
                <ChakraProvider>
                  <Component {...pageProps} />
                </ChakraProvider>
              </UserProvider>
            </PromoterLayout>
          </NotificationProvider>
        </TokenContextProvider>
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider>
      <TokenContextProvider>
        <SignupProvider>
          <UserProvider>
            <VariableStyle />
            <GlobalStyle />
            <SanitizeStyle />
            <ChakraProvider>
              <Component {...pageProps} />
            </ChakraProvider>
          </UserProvider>
        </SignupProvider>
      </TokenContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
