import React from "react";
import Head from "next/head";
import App from "next/app";
import loadable from '@loadable/component';

const Nav = loadable(() => import('../components/Nav'));
// const Footer = loadable(() => import('../components/Footer'));
// const Loading = loadable(() => import('../components/Loading'));

// import { PageTransition } from "next-page-transitions";

import "../styles/base.scss";


// The progress spinner is hurting the snappiness of the transitions
// import NProgress from "nprogress";
// import Router from "next/router";
// Router.events.on('routeChangeStart', () => {
//     NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
    // static async getInitialProps({ Component, router, ctx }) {
    //   let pageProps = {}
    //   if (Component.getInitialProps) {
    //     pageProps = await Component.getInitialProps(ctx)
    //   }
    //   return { pageProps }
    // }


    render() {
        const { Component, pageProps, router } = this.props;
        // const timeout = 400;

        return (
            <>
                <Head>
                    <title>frank martinez</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>


                <Nav {...pageProps} route={router.route} />

                {/* <PageTransition
                    timeout={timeout}
                    classNames="page-transition"
                    loadingClassNames="spinner-icon"
                    loadingComponent={<Loading />}
                    loadingDelay={0}
                    loadingTimeout={{
                        enter: timeout,
                        exit: 0,
                    }}
                > */}
                    <Component {...pageProps} key={router.route} />
                {/* </PageTransition> */}



            </>
        );
    }
}



// Wraps all components in the tree with the data provider
// export default withApollo(MyApp);

