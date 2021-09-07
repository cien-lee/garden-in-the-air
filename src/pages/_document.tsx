import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* TODO: 아이콘 바꾸기 */}
          {/* <link rel="icon" href="https://t1.daumcdn.net/kakaopay/icons/web/32-brand.png" sizes="32x32" />
          <link rel="icon" href="https://t1.daumcdn.net/kakaopay/icons/web/192-brand.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="https://t1.daumcdn.net/kakaopay/icons/web/180-brand.png" />
          <link rel="shortcut icon" href="https://t1.daumcdn.net/kakaopay/icons/favicon.ico" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
