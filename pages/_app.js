import React from "react";
import Head from "next/head";
import App from "next/app";
import loadable from '@loadable/component';

const Nav = loadable(() => import('../components/Nav'));

import { PageTransition } from "next-page-transitions";

import "../styles/base.scss";

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render() {
        const { 
            pageProps, 
            Component, 
            router,
        } = this.props;
        
        return (
            <>
                <Head>
                    <title>frank martinez</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>


                <Nav 
                    route={router.route} 
                />

                <PageTransition
                    timeout={pageProps.timeout}
                    classNames={`page-transition-${pageProps.transitionType}`}
                    loadingClassNames={`section__loading`}
                    loadingDelay={0}
                    loadingTimeout={{
                        enter: pageProps.timeout,
                        exit: 0,
                    }}
                >
                    <Component 
                        {...pageProps}
                        key={router.route} 
                    />
                </PageTransition>
            </>
        );
    }
}

