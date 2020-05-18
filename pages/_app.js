import React from "react";  
import Head from "next/head";
import App, { Container } from "next/app";
import AppProvider from "../components/Context/AppProvider";
import "../assets/css/style.css";  
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
import Nav from "../components/nav";

const HomeApp = ({ Component, pageProps, apollo, isAuthenticated }) => { 
  return (
    <ApolloProvider client={apollo}>
      <Container>
        <AppProvider>
        <Head>
          <title>Strapi blog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
            <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
        </Head>
          <Nav isAuthenticated={isAuthenticated} {...pageProps}/>  
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    </ApolloProvider>
  )
};

HomeApp.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
}

// Wraps all components in the tree with the data provider
export default withData(HomeApp);