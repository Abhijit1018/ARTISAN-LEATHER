'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, subtotal, formattedSubtotal, isLoaded } = useCart();
    const { formatPrice } = useCurrency();

    if (!isLoaded) return null;

    return (
        <>
            <section className="shop-hero" style={{ padding: '120px 0 80px' }}>
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Shopping Cart</h1>
                    <p>{cartItems.length} items in your cart</p>
                </motion.div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', minHeight: '600px' }}>
                <div className="container">

                    {cartItems.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '100px 0', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)' }}>
                            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>🛒</div>
                            <h2 style={{ marginBottom: 'var(--space-md)' }}>Your cart is empty</h2>
                            <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-xl)' }}>Looks like you haven't added any premium leather goods yet.</p>
                            <Link href="/shop" className="btn btn-primary">Continue Shopping</Link>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-3xl)', alignItems: 'flex-start' }}>

                            {/* Cart Items */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        style={{
                                            display: 'flex',
                                            gap: 'var(--space-lg)',
                                            backgroundColor: 'var(--color-white)',
                                            padding: 'var(--space-lg)',
                                            borderRadius: 'var(--radius-lg)',
                                            boxShadow: 'var(--shadow-sm)'
                                        }}
                                    >
                                        <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                                            <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                <div>
                                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', marginBottom: '4px' }}>
                                                        <Link href={`/product/${item.slug}`}>{item.name}</Link>
                                                    </h3>
                                                    <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem' }}>{item.category}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    style={{ color: 'var(--color-gray-400)', padding: '4px' }}
                                                    aria-label="Remove item"
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                                <div className="qty-selector" style={{ transform: 'scale(0.85)', transformOrigin: 'left' }}>
                                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                                                    <span className="qty-value">{item.quantity}</span>
                                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                                <div style={{ fontWeight: '600', color: 'var(--color-secondary)' }}>
                                                    {formatPrice(item.price * item.quantity)}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div style={{
                                backgroundColor: 'var(--color-white)',
                                padding: 'var(--space-2xl)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                position: 'sticky',
                                top: '100px'
                            }}>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-lg)' }}>Order Summary</h2>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)', color: 'var(--color-gray-600)' }}>
                                    <span>Subtotal</span>
                                    <span>{formattedSubtotal}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-md)', color: 'var(--color-gray-600)' }}>
                                    <span>Shipping</span>
                                    <span>{subtotal > 200 ? 'Free' : formatPrice(15)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-lg)', color: 'var(--color-gray-600)' }}>
                                    <span>Taxes</span>
                                    <span>Calculated at checkout</span>
                                </div>

                                <div style={{ height: '1px', backgroundColor: 'var(--color-gray-200)', margin: 'var(--space-md) 0' }}></div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xl)', fontSize: '1.25rem', fontWeight: 'bold' }}>
                                    <span>Total</span>
                                    <span>{formatPrice(subtotal > 200 ? subtotal : subtotal + 15)}</span>
                                </div>

                                <button className="btn btn-primary" style={{ width: '100%' }}>
                                    Proceed to Checkout
                                </button>

                                <p style={{ textAlign: 'center', marginTop: 'var(--space-md)', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                                    🔒 Secure SSL Encrypted Checkout
                                </p>
                            </div>

                        </div>
                    )}

                </div>
            </section>
        </>
    );
}
