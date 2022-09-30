import PromoterLayout from '@/components/PromoterLayout';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
import { PreferenceProvider } from '@/context/preferenceContext';
function MyApp({ Component, pageProps, router }) {
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
    <PreferenceProvider>
      <VariableStyle />
      <GlobalStyle />
      <SanitizeStyle />
      <Component {...pageProps} />
    </PreferenceProvider>
  );
}

export default MyApp;
