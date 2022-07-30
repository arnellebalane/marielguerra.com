import Head from 'next/head';
import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Mariel Guerra</title>

        <meta property="og:title" content="Mariel Guerra" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.SITE_URL}/thumbnail.jpg`}
        />
        <meta property="og:url" content={`${process.env.SITE_URL}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
