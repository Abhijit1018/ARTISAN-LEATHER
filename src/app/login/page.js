'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        // Simulate login
        login(email, password);

        if (email === 'admin@artisanleather.com') {
            router.push('/admin');
        } else {
            router.push('/profile');
        }
    };

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        backgroundColor: 'var(--color-white)',
                        padding: 'var(--space-2xl)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                >
                    <h1 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-md)', textAlign: 'center' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--color-gray-500)', textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                        Sign in to your account.
                    </p>

                    {error && (
                        <div style={{ color: 'var(--color-error)', backgroundColor: 'rgba(196, 69, 54, 0.1)', padding: '10px', borderRadius: '4px', marginBottom: 'var(--space-md)', fontSize: '0.9rem' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gray-300)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>
                            Sign In
                        </button>
                    </form>

                    <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-gray-600)' }}>
                        Don't have an account? <Link href="/register" style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>Create one</Link>
                    </div>

                    <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-gray-200)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-gray-500)' }}>
                        <p><strong>Demo Admin:</strong> admin@artisanleather.com / admin</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
