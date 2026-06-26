import '../styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Script from 'next/script';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Shree Shyam e-Mitra | Aapki Seva, Hamaari Zimmedaari',
  description: 'Shree Shyam e-Mitra provides fast, reliable, and government-authorized digital services in your local community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossOrigin="anonymous" strategy="lazyOnload" />
      </body>
    </html>
  );
}
