import React from "react";
import Head from "next/head";
import App from "next/app";

import Nav from "../components/Nav";

import { PageTransition } from "next-page-transitions";

import "../styles/base.scss";

// import { ApolloProvider } from "@apollo/react-hooks";
// import { withApollo } from "../lib/apollo";



class MyApp extends App {
    // static async getInitialProps({ Component, router, ctx }) {
    //   let pageProps = {}
    //   if (Component.getInitialProps) {
    //     pageProps = await Component.getInitialProps(ctx)
    //   }
    //   return { pageProps }
    // }


    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <>
                <Head>
                    <title>frank martinez</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>


                <Nav {...pageProps} route={router.route} />
                <PageTransition timeout={333} classNames="page-transition">
                    <Component {...pageProps} key={router.route} />
                </PageTransition>
            </>
        );
    }
}



// Wraps all components in the tree with the data provider
// export default withApollo(MyApp);
export default MyApp;
