import Head from 'next/head';

import Layout from '../components/layout/layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rodwin's Tavern</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
