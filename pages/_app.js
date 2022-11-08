import PromoterLayout from '@/components/PromoterLayout';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
import { PreferenceProvider } from '@/context/preferenceContext';
import { NotificationProvider } from '@/context/notificationContext';
function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/promoters')) {
    return (
      <NotificationProvider>
        <PromoterLayout>
          <VariableStyle />
          <GlobalStyle />
          <SanitizeStyle />
          <Component {...pageProps} />
        </PromoterLayout>
      </NotificationProvider>
    );
  }
  return (
    <PreferenceProvider>
      <VariableStyle />
      <GlobalStyle />
      <SanitizeStyle />
      <Component {...pageProps} />
    </PreferenceProvider>
  );
}

export default MyApp;
