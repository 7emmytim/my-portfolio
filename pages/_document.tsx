import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript defaultColorScheme="light" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="BhuT7hhwmAmBNPhB6QyJ2GPWCuGYPFgfdCaZDyHJ_So"
        />
        {/* Google Fonts: Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
