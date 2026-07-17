import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'ByBike Micromobility',
  description: 'ByBike Micromobility | All-in-One Micromobility Solutions',
  keywords: [
    'micromobility',
    'scooter',
    'bike',
    'bybike',
    'green',
    'eco',
    'sustainable',
    'sustainability',
    'transportation',
    'transport',
    'mobility',
    'electric',
    'electricity',
    'electric scooter',
    'electric bike',
    'all-in-one',
  ],
  
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={
          'bg-white overflow-x-hidden pt-[5rem] ' + montserrat.className
        }
      >
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
