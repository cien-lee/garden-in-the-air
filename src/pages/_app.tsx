import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.kakaopay.com/" />
        <meta property="og:site_name" content='카카오페이 | 마음 놓고 금융하다' />
        <meta property="og:title" content='카카오페이 | 마음 놓고 금융하다' />
        <meta property="og:locale" content='ko_KR' />
        <meta property="og:image" content="http://t1.daumcdn.net/kakaopay/brand_site/img/og/kakaopay_og_20201217.png" />
        <meta property="og:description" content='카카오페이 공식 브랜드사이트' />
        <meta name="description" content='임시 디스크립션' /> */}
        <title>Home</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
