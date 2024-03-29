import type { AppProps } from 'next/app';
import { Header } from 'components';
import { GlobalStyle } from 'styles/global';

import 'swiper/swiper.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
