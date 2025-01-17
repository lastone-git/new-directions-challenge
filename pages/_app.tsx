import type { AppProps } from 'next/app';
import '../styles/reset.scss';
import '../styles/globals.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>  
}

export default MyApp;