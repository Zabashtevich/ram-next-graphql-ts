import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import "normalize.css";

import { GlobalStyles } from "../theme/global-styles";
import AppLayout from "./../layout";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default MyApp;
