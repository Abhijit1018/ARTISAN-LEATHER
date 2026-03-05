'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';
import ProductCard from '@/components/ProductCard';

export default function FavoritesPage() {
    const { favorites, isLoaded } = useFavorites();

    if (!isLoaded) return null;

    return (
        <>
            <section className="shop-hero">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Your Favorites</h1>
                    <p>Saved handcrafted pieces to review later</p>
                </motion.div>
            </section>

            <section className="section-padding">
                <div className="container">
                    {favorites.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '100px 0', backgroundColor: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)', color: 'var(--color-gray-300)' }}>♡</div>
                            <h2 style={{ marginBottom: 'var(--space-md)' }}>No favorites yet</h2>
                            <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-xl)' }}>Tap the heart icon on any product to save it here.</p>
                            <Link href="/shop" className="btn btn-primary">Browse Collection</Link>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {favorites.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
