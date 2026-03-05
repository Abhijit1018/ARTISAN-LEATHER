'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CurrencySelector from './CurrencySelector';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const { user, isLoaded: authLoaded } = useAuth();
    const { itemCount, isLoaded: cartLoaded } = useCart();
    const { favorites, isLoaded: favLoaded } = useFavorites();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
                <div className="header-inner">
                    <Link href="/" className="logo">
                        <span className="logo-icon">🏛</span>
                        <span>ARTISAN LEATHER</span>
                    </Link>

                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/shop" className="nav-link">Shop</Link>
                        <Link href="/about" className="nav-link">About</Link>
                        <Link href="/faq" className="nav-link">FAQs</Link>
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </nav>

                    <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                        <CurrencySelector />

                        {(authLoaded && cartLoaded && favLoaded) && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '8px' }}>
                                <Link href={user ? "/profile" : "/login"} aria-label="User Profile" style={{ fontSize: '1.2rem', color: 'var(--color-white)', textDecoration: 'none' }}>
                                    👤
                                </Link>
                                <Link href="/favorites" aria-label="Favorites" style={{ fontSize: '1.3rem', color: 'var(--color-white)', position: 'relative', textDecoration: 'none', lineHeight: 1 }}>
                                    ♡
                                    {favorites.length > 0 && (
                                        <span style={{ position: 'absolute', top: '-6px', right: '-8px', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                                            {favorites.length}
                                        </span>
                                    )}
                                </Link>
                                <Link href="/cart" aria-label="Shopping Cart" style={{ fontSize: '1.2rem', color: 'var(--color-white)', position: 'relative', textDecoration: 'none' }}>
                                    🛒
                                    {itemCount > 0 && (
                                        <span style={{ position: 'absolute', top: '-6px', right: '-8px', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                                            {itemCount}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        )}

                        <button
                            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle mobile menu"
                            id="mobile-menu-toggle"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                <nav className="mobile-nav-links">
                    <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
                    <Link href="/shop" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Shop All</Link>
                    <Link href="/shop?category=Briefcases" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Briefcases</Link>
                    <Link href="/shop?category=Duffel+Bags" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Duffel Bags</Link>
                    <Link href="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About Us</Link>
                    <Link href="/faq" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>FAQs</Link>
                    <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
                </nav>
            </div>
        </>
    );
}
