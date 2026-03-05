'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function ProfilePage() {
    const { user, isLoaded, logout } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('details');

    useEffect(() => {
        if (isLoaded && !user) {
            router.push('/login');
        }
    }, [user, isLoaded, router]);

    if (!isLoaded || !user) return null;

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <>
            <section className="shop-hero">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>My Account</h1>
                    <p>Welcome back, {user.name}</p>
                </motion.div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>

                    <div className="profile-layout">

                        {/* Sidebar Navigation */}
                        <motion.div
                            className="profile-sidebar"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <button
                                    onClick={() => setActiveTab('details')}
                                    style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '4px', backgroundColor: activeTab === 'details' ? 'var(--color-cream)' : 'transparent', color: activeTab === 'details' ? 'var(--color-secondary)' : 'var(--color-gray-600)', fontWeight: activeTab === 'details' ? '600' : '400', transition: 'all 0.2s' }}
                                >
                                    Account Details
                                </button>
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '4px', backgroundColor: activeTab === 'orders' ? 'var(--color-cream)' : 'transparent', color: activeTab === 'orders' ? 'var(--color-secondary)' : 'var(--color-gray-600)', fontWeight: activeTab === 'orders' ? '600' : '400', transition: 'all 0.2s' }}
                                >
                                    Order History
                                </button>
                                <button
                                    onClick={() => setActiveTab('addresses')}
                                    style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '4px', backgroundColor: activeTab === 'addresses' ? 'var(--color-cream)' : 'transparent', color: activeTab === 'addresses' ? 'var(--color-secondary)' : 'var(--color-gray-600)', fontWeight: activeTab === 'addresses' ? '600' : '400', transition: 'all 0.2s' }}
                                >
                                    Address Book
                                </button>
                                {user.role === 'admin' && (
                                    <Link href="/admin" style={{ display: 'block', padding: '12px 16px', borderRadius: '4px', color: 'var(--color-accent)', fontWeight: '600', transition: 'all 0.2s' }}>
                                        Admin Dashboard →
                                    </Link>
                                )}
                                <div style={{ margin: '10px 0', borderTop: '1px solid var(--color-gray-200)' }}></div>
                                <button
                                    onClick={handleLogout}
                                    style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--color-error)' }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </motion.div>

                        {/* Main Content Area */}
                        <motion.div
                            className="profile-content"
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {activeTab === 'details' && (
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>Account Details</h2>
                                    <div className="profile-details-grid">
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '4px' }}>Full Name</p>
                                            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-800)' }}>{user.name}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '4px' }}>Email Address</p>
                                            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-800)' }}>{user.email}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '4px' }}>Phone Number</p>
                                            <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-800)' }}>{user.phone || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline" style={{ padding: '10px 20px' }}>Edit Details</button>
                                </div>
                            )}

                            {activeTab === 'orders' && (
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>Order History</h2>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                        {[
                                            { id: 'ORD-9821', date: 'Oct 12, 2026', total: 420, status: 'Delivered', tracker: 'Track Package' },
                                            { id: 'ORD-8452', date: 'Jul 04, 2026', total: 110, status: 'Processing', tracker: 'View Status' },
                                        ].map(order => (
                                            <div key={order.id} className="order-card">
                                                <div>
                                                    <p style={{ fontWeight: '600', color: 'var(--color-secondary)', marginBottom: '4px' }}>{order.id}</p>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>Placed on {order.date}</p>
                                                </div>
                                                <div style={{ textAlign: 'right' }}>
                                                    <span style={{
                                                        display: 'inline-block', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '8px',
                                                        backgroundColor: order.status === 'Delivered' ? 'rgba(45, 140, 79, 0.1)' : 'rgba(196, 69, 54, 0.1)',
                                                        color: order.status === 'Delivered' ? 'var(--color-success)' : 'var(--color-error)'
                                                    }}>{order.status}</span>
                                                    <p style={{ fontWeight: '600' }}>${order.total}.00</p>
                                                </div>
                                                <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>{order.tracker}</button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            )}

                            {activeTab === 'addresses' && (
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>Address Book</h2>

                                    {user.addresses && user.addresses.length > 0 ? (
                                        <div className="address-grid">
                                            {user.addresses.map(addr => (
                                                <div key={addr.id} style={{ padding: 'var(--space-lg)', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-md)', position: 'relative' }}>
                                                    {addr.isDefault && <span style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.75rem', backgroundColor: 'var(--color-gray-200)', padding: '2px 8px', borderRadius: '10px' }}>Default</span>}
                                                    <h4 style={{ marginBottom: '8px' }}>{addr.type}</h4>
                                                    <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                                        {addr.fullName}<br />
                                                        {addr.street}<br />
                                                        {addr.city}, {addr.state} {addr.zip}<br />
                                                        {addr.country}
                                                    </p>
                                                    <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
                                                        <button style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'underline' }}>Edit</button>
                                                        <button style={{ color: 'var(--color-error)', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'underline' }}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p style={{ color: 'var(--color-gray-500)' }}>You haven&apos;t saved any addresses yet.</p>
                                    )}

                                    <button className="btn btn-outline" style={{ marginTop: 'var(--space-xl)' }}>+ Add New Address</button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
