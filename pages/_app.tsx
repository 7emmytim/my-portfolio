import "@/styles/globals.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  // primaryColor: "green",
  // primaryShade: { light: 9, dark: 9 },
  // fontFamily: "WDXL Lubrifont TC, sans-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Head>
        <title>Frontend dev</title>
        <meta name="description" content="Frontend dev" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:url" content="https://www.7timilehin.vercel.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frontend dev" />
        <meta property="og:description" content="Frontend dev" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:logo" content="/favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="7timilehin.vercel.dev" />
        <meta
          property="twitter:url"
          content="https://www.7timilehin.vercel.dev/"
        />
        <meta name="twitter:title" content="Frontend dev" />
        <meta name="twitter:description" content="Frontend dev" />
        <meta name="twitter:image" content="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
