import PromoterLayout from '@/components/PromoterLayout';
import { GlobalStyle } from '@/styles/global';
import { SanitizeStyle } from '@/styles/sanitize';
import { VariableStyle } from '@/styles/variables';
function MyApp({ Component, pageProps, router }) {
  if (
    router.pathname.startsWith('/promoters') ||
    router.pathname.startsWith('/placers')
  ) {
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
    <>
      <VariableStyle />
      <GlobalStyle />
      <SanitizeStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
