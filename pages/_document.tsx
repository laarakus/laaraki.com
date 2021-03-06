import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
        </Head>
        <body className="text-white bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
