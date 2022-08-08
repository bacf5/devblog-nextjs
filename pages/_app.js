import '../styles/globals.css';
import Header from '../src/components/Header';
import Link from 'next/link';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
