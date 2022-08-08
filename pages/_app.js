import '../styles/globals.css';
import Header from '../src/components/Header';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
