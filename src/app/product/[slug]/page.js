'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCurrency } from '@/context/CurrencyContext';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
    const params = useParams();
    const { formatPrice } = useCurrency();
    const { addToCart } = useCart();
    const [qty, setQty] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const product = products.find((p) => p.slug === params.slug);

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
    }, [product]);

    if (!product) {
        return (
            <div style={{ padding: '200px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Product Not Found</h1>
                <p style={{ color: 'var(--color-gray-500)', marginBottom: '24px' }}>
                    The product you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link href="/shop" className="btn btn-primary">
                    Browse All Products
                </Link>
            </div>
        );
    }

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;
        let stars = '';
        for (let i = 0; i < full; i++) stars += '★';
        if (half) stars += '½';
        return stars;
    };

    const handleAddToCart = () => {
        addToCart(product, qty);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    return (
        <section className="product-detail">
            <div className="container">
                {/* Breadcrumb */}
                <motion.div
                    style={{
                        marginBottom: 'var(--space-2xl)',
                        fontSize: '0.85rem',
                        color: 'var(--color-gray-400)',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link href="/" style={{ color: 'var(--color-gray-400)' }}>Home</Link>
                    <span>/</span>
                    <Link href="/shop" style={{ color: 'var(--color-gray-400)' }}>Shop</Link>
                    <span>/</span>
                    <Link
                        href={`/shop?category=${encodeURIComponent(product.category)}`}
                        style={{ color: 'var(--color-gray-400)' }}
                    >
                        {product.category}
                    </Link>
                    <span>/</span>
                    <span style={{ color: 'var(--color-gray-700)' }}>{product.name}</span>
                </motion.div>

                <div className="product-detail-grid">
                    <motion.div
                        className="product-gallery"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="product-main-image">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="product-detail-info"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="product-detail-category">{product.category}</div>
                        <h1 className="product-detail-name">{product.name}</h1>

                        <div className="product-rating" style={{ marginBottom: 'var(--space-lg)' }}>
                            <span className="stars" style={{ fontSize: '1.1rem' }}>{renderStars(product.rating)}</span>
                            <span className="review-count" style={{ fontSize: '0.9rem' }}>
                                {product.rating} ({product.reviews} reviews)
                            </span>
                        </div>

                        <div className="product-detail-price">
                            {formatPrice(product.price)}
                            {product.originalPrice && (
                                <span
                                    style={{
                                        fontSize: '1.2rem',
                                        color: 'var(--color-gray-400)',
                                        textDecoration: 'line-through',
                                        marginLeft: '12px',
                                    }}
                                >
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                            {product.originalPrice && (
                                <span
                                    style={{
                                        display: 'inline-block',
                                        marginLeft: '12px',
                                        padding: '4px 10px',
                                        background: 'rgba(196, 69, 54, 0.1)',
                                        color: 'var(--color-error)',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    Save {formatPrice(product.originalPrice - product.price)}
                                </span>
                            )}
                        </div>

                        <p className="product-detail-description">{product.description}</p>

                        <div className="product-features">
                            <h3>Features & Details</h3>
                            <ul>
                                {product.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="add-to-cart-section">
                            <div className="qty-selector">
                                <button
                                    className="qty-btn"
                                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                                    aria-label="Decrease quantity"
                                >
                                    −
                                </button>
                                <span className="qty-value">{qty}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => setQty((prev) => Math.min(10, prev + 1))}
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                            <motion.button
                                className="btn btn-primary"
                                style={{ flex: 1 }}
                                onClick={handleAddToCart}
                                whileTap={{ scale: 0.98 }}
                                id="add-to-cart-btn"
                            >
                                {addedToCart ? '✓ Added to Cart!' : `Add to Cart — ${formatPrice(product.price * qty)}`}
                            </motion.button>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: 'var(--space-lg)',
                            padding: 'var(--space-lg) 0',
                            borderTop: '1px solid var(--color-gray-200)',
                            borderBottom: '1px solid var(--color-gray-200)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                                🚚 <span>Free Shipping over $200</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                                🔄 <span>30-Day Returns</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                                🛡️ <span>1-Year Warranty</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <motion.div
                        className="related-products"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>You May Also Like</h2>
                        <div className="products-grid" style={{ gridTemplateColumns: `repeat(${Math.min(relatedProducts.length, 4)}, 1fr)` }}>
                            {relatedProducts.map((rp) => (
                                <ProductCard key={rp.id} product={rp} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
