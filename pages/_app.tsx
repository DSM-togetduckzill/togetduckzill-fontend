import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { global } from "../styles/global";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global}></Global>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
