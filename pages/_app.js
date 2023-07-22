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
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SingleAdProvider } from '@/context/singleAdContext';
import { RecentJobProvider } from '@/context/recentJobContext';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        lineHeight: 1.5,
        fontSize: '1.8rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
        overflowX: 'hidden',
        background: '#FAFAFA',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
    },
  },
});

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
                <SingleAdProvider>
                  <UserProvider>
                    <VariableStyle />
                    <GlobalStyle />
                    <SanitizeStyle />
                    <ChakraProvider theme={theme}>
                      <Component {...pageProps} />
                    </ChakraProvider>
                  </UserProvider>
                </SingleAdProvider>
              </PlacersLayout>
            </NotificationProvider>
          </AdPlacerProvider>
        </TokenContextProvider>
      </AuthContextProvider>
    );
  }

  if (router.pathname.startsWith('/promoters')) {
    return (
      <AuthContextProvider>
        <TokenContextProvider>
          <NotificationProvider>
            <PromoterLayout>
              <RecentJobProvider>
                <UserProvider>
                  <VariableStyle />
                  <GlobalStyle />
                  <SanitizeStyle />
                  <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                  </ChakraProvider>
                </UserProvider>
              </RecentJobProvider>
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
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </UserProvider>
        </SignupProvider>
      </TokenContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
