import '../styles.css';
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
