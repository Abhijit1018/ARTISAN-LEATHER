import { Playfair_Display, Inter, Noto_Sans } from 'next/font/google';
import './globals.css';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-currency',
  display: 'swap',
});

export const metadata = {
  title: 'Artisan Leather Co. | Premium Handcrafted Leather Goods',
  description:
    'Discover premium handcrafted leather goods made from full-grain, naturally tanned leather. Briefcases, duffel bags, wallets, and more — each piece a testament to generational craftsmanship.',
  keywords:
    'leather goods, handcrafted leather, full grain leather, leather briefcase, leather duffel bag, artisan leather, premium leather, vegetable tanned',
  openGraph: {
    title: 'Artisan Leather Co. | Premium Handcrafted Leather Goods',
    description:
      'Handcrafted premium leather goods made with love, tradition, and respect for nature.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${notoSans.variable}`}>
      <body>
        <AuthProvider>
          <CurrencyProvider>
            <CartProvider>
              <FavoritesProvider>
                <Header />
                <main>{children}</main>
                <Footer />
                <BackToTop />
              </FavoritesProvider>
            </CartProvider>
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
