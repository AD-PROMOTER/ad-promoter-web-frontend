import PromoterLayout from '@/components/PromoterLayout';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
import { AdPlacerProvider } from '@/context/adPlacerContext';
function MyApp({ Component, pageProps, router }) {
  if (
    router.pathname.startsWith('/promoters') ||
    router.pathname.startsWith('/placers')
  ) {
    return (
      <AdPlacerProvider>
        <PromoterLayout>
          <VariableStyle />
          <GlobalStyle />
          <SanitizeStyle />
          <Component {...pageProps} />
        </PromoterLayout>
      </AdPlacerProvider>
    );
  }
  return (
    <>
      <VariableStyle />
      <GlobalStyle />
      <SanitizeStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
