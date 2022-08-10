import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/index.css';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    const handleRouteChangeStart = () => nprogress.start();
    const handleRouteChangeComplete = () => nprogress.done();

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default App;
