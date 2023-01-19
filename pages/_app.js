import PromoterLayout from '@/components/PromoterLayout';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
import { AdPlacerProvider } from '@/context/adPlacerContext';
import { PreferenceProvider } from '@/context/preferenceContext';
import { NotificationProvider } from '@/context/notificationContext';
import { DiscoveryGlobalStyle } from '@/styles/discoveryGlobal';
import AdminLayout from '@/components/AdminLayout';
import { AuthContextProvider } from '@/context/authContext';
import PlacersLayout from '@/components/PlacersLayout';
// import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/promoters/settings')) {
    return (
      <AuthContextProvider>
        <NotificationProvider>
          <VariableStyle />
          <GlobalStyle />
          <SanitizeStyle />
          <Component {...pageProps} />
        </NotificationProvider>
      </AuthContextProvider>
    );
  }

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
        <AdPlacerProvider>
          <NotificationProvider>
            <PlacersLayout>
              <VariableStyle />
              <GlobalStyle />
              <SanitizeStyle />
              <Component {...pageProps} />
            </PlacersLayout>
          </NotificationProvider>
        </AdPlacerProvider>
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
        <NotificationProvider>
          <PromoterLayout>
            <VariableStyle />
            <GlobalStyle />
            <SanitizeStyle />
            <Component {...pageProps} />
          </PromoterLayout>
        </NotificationProvider>
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider>
      <PreferenceProvider>
        <VariableStyle />
        <GlobalStyle />
        <SanitizeStyle />
        <Component {...pageProps} />
      </PreferenceProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
