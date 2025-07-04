import "@/styles/globals.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { MetaTags } from "@/layout";

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  primaryColor: "brand",
  colors: {
    brand: [
      "#ececff",
      "#c5c5f6",
      "#9d9ded",
      "#7676e6",
      "#5454D4", // main shade (500)
      "#3e3eb3",
      "#2e2e93",
      "#202072",
      "#141452",
      "#0a0a32",
    ],
  },
  primaryShade: { light: 5, dark: 5 },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <MetaTags />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
